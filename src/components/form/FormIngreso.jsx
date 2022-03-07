import { Container,Checkbox, FormControl,FormControlLabel, FormHelperText, Input, InputLabel,Button, Grid,Select,MenuItem} from '@material-ui/core'
import Fiscalias from "../../data/fiscalias.json";
 import React from 'react'

 

const FormIngreso = () =>    (
  
    <Container>
         <h1>Formlario /Formlario></h1>
        <Grid container >
            <Grid item md="12">
                <FormControl>
                    <InputLabel htmlFor='nombre'>Nombre</InputLabel>
                    <Input id="nombre" type="text" aria-describedby="nombre-helper"/>
                    <FormHelperText id="nombre-helper">Ingrese nombre usuario</FormHelperText>
                </FormControl>
            </Grid>

            <Grid item md="12">
            <FormControl>
                <InputLabel htmlFor='rut'>RUT</InputLabel>
                <Input id="rut" type="text" />
                <FormHelperText>Ingrese   RUT</FormHelperText>
            </FormControl>

            </Grid>

            <Grid item md="12">
            <FormControl>
                <InputLabel htmlFor='cta_saf'>Cuenta SAF</InputLabel>
                <Input id="cta_saf" type="text"  />
                <FormHelperText>Ingrese cta. SAF</FormHelperText>
            </FormControl>

            </Grid>


            <Grid item md="12">
            <FormControl>
                <InputLabel htmlFor='cta_red'>Cuenta de Red</InputLabel>
                <Input id="cta_red" type="text" />
                <FormHelperText>Ingrese cta. RED </FormHelperText>
            </FormControl>

            </Grid>


            <Grid item md="12">
            <FormControl>
                <InputLabel id="fiscalia">Fiscalía</InputLabel>
                <Select labelId="fiscalia" id="fiscaliaSelect" >
                {Fiscalias.map(({cod_fiscalia, gls_fiscalia}, index) => (
                    <MenuItem key={cod_fiscalia} value={cod_fiscalia}>
                    {gls_fiscalia}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>

            </Grid>



         
            <Grid item md="12">

                <FormControlLabel
                    value="carpetas"
                    control={<Checkbox color="primary" />}
                    label="Carpetas"
                    labelPlacement="carpetas"
                />

                <FormControlLabel
                    value="diliegencias"
                    control={<Checkbox color="primary" />}
                    label="Diligencias"
                    labelPlacement="diligencias"
                />
            
            </Grid>           
           



            <Grid item md="12">
            <span>

                <Button 
                    variant="contained"
                    color="primary"
                >
                    Grabar

                </Button>
            </span>    
            <span>

            <Button 
                variant="contained"
                color="primary"
            >
                Cancelar

            </Button>
            &nbsp;
            </span>
            </Grid>

           
        </Grid>
        
        </Container>

)
 

export default FormIngreso