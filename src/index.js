import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCursor from "react-animated-cursor"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
     <ToastContainer position='top-right' autoClose={1000}/>
     <AnimatedCursor />
  </React.StrictMode>
);

reportWebVitals();
