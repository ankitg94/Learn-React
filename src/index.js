import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './Context_Api/Themecontext';
import { USeRContextProvider } from './Context_Api/UserContext';
import { FormContextProvider } from './context_api2/FormContext.js';
import { MyContextProvider } from './Context_Api3/Context.js';
import {Provider} from "react-redux"
import {Store} from "./Rtk/Store.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormContextProvider> 
    <USeRContextProvider> 
    <ThemeProvider> 
    <MyContextProvider>
      <Provider store={Store}> 
        <App/>
        </Provider>
    </MyContextProvider>
    </ThemeProvider>
    </USeRContextProvider>
    </FormContextProvider>
  </React.StrictMode>
);
