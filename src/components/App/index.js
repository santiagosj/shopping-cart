import React,{Fragment} from 'react';
import FloatCart from '../FloatCart';
import {HashRouter} from 'react-router-dom'
import MainRouter from '../MainContent/MainRouter'

const App = () => {
  return (
    <HashRouter>
        <Fragment>
              <MainRouter/>
              <FloatCart />
        </Fragment>
    </HashRouter>
    
  );
}

export default App;


/**
 * 
 * APP HOLDER
 * 
 */