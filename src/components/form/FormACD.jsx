import { Container, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, Button, Grid, Select, MenuItem} from '@material-ui/core'
import Fiscalias from "../../data/fiscalias.json";
import ACD from "../../data/acdext.json";
import axios from 'axios';
import { Alert,Snackbar } from '@mui/material';
 


import React, { useState, useEffect, useCallback} from 'react'

import { DataGrid } from '@mui/x-data-grid';


const columns = [

    {
        field: "id",
        headerName: "ID",
        width: 100
    },

    {
        field: "FISCALIA",
        headerName: "Fiscalía",
        width: 180
    },
    {
        field: "RUC",
        headerName: "RUC",
        width: 180
    },
    {
        field: "IMPUTADO",
        headerName: "Nombre",
        width: 300
    },
    {
        field: "NUM_DOC_IDENTIFICACION",
        headerName: "N Documento",
        width: 200
    },
    {
        field: "TIPO_DOC",
        headerName: "Tipo Doc.",
        width: 160
    },
    {
        field: "FEC_DIGITACION_ACT",
        headerName: "Fec. Digit.",
        type: 'date',
        valueGetter: ({ value }) => value && new Date(value),
        width: 150,
        hidden:true
    },
    {
        field: "ACTIVIDAD",
        headerName: "Actividad",
        width: 200
    },
    {
        field: "NACIONALIDAD",
        headerName: "Nacionalidad",
        width: 220
    },

    {
        field: 'DETENCION_ILEGAL',
        headerName: 'Det. Ilegal?',
        type: 'boolean',
        width: 220,
        editable: true,
    },

    {
        field: 'RIT',
        headerName: 'RIT',  
        width: 100,
        editable: true,
    },

]


const useFakeMutation = () => {
    return useCallback(
      (user) =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve(user);
          }, 200),
        ),
      [],
    );
  };

const FormIngreso = () => {

  const [tableData, setTableData] = useState([]);
  

  const [snackbar, setSnackbar] = useState(null);
  const [rows, setRows] =  useState([]);
  const handleCloseSnackbar = () => setSnackbar(null);
  const mutateRow = useFakeMutation();

  useEffect(() => {
    fetch("http://localhost:3001/acdext")
        .then((data) => data.json())
        .then((data) => setRows(data))

}, [])
 


  const handleCellEditCommit = useCallback(
    async (params) => {
      try {
        // Make the HTTP request to save in the backend
        let detilegal=0; let rit='';
        if (params.field=='DETENCION_ILEGAL'){
            if (params.value){
                detilegal = 1;
            }
            rit =   params.row['RIT'];
           
        }else {
            rit =  params.value;
            if  (params.row['DETENCION_ILEGAL']){
                detilegal =  1;
            }
           
        }
       

        const res = await axios ({
            method:'put',
            url:'http://localhost:3001/acdext',
            data: {
                id : params.id,
                rit:rit,
                detilegal:detilegal
            }


        });
         
           
        const response = await mutateRow({
          id: params.id,
          [params.field]: params.value,
          
        });
        
        setSnackbar({ children: 'CAMBIOS REALIZADOS CON EXITO', severity: 'success' });
        setRows((prev) =>
          prev.map((row) => (row.id === params.id ? { ...row, ...response } : row)),
        );
      } catch (error) {
          console.log(error);
        setSnackbar({ children: 'Error while saving user', severity: 'error' });
        // Restore the row in case of error
        setRows((prev) => [...prev]);
      }
    },
    [mutateRow],
  );


  
  
    return (

        <div style={{ height: 700, width: '100%', marginTop:'80px'}}>
             
            <h2>Listado de Imputados Extranjeros</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={12}
                onCellEditCommit={handleCellEditCommit}
            />
            {!!snackbar && (
                <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
                        <Alert {...snackbar} onClose={handleCloseSnackbar} />

                </Snackbar>
            )}
        </div>
    )
}

export default FormIngreso