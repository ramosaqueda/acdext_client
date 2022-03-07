import React, { Fragment } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import FormIngreso from './components/form/FormIngreso';
import FormACD from './components/form/FormACD';
const App = () => (
 
  <Fragment>  
    <Header/>
     <FormACD />
    <Footer />
     
  </Fragment>
  
);
export default App;