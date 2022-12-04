import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Form } from 'react-router-dom';
import App from './App';
import CartProvider from './contexts/Cart';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <CartProvider>
   <App />  
   
  </CartProvider>
   
 //</React.StrictMode>
);

