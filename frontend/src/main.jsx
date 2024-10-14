import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App'; 
import store from './Store'; 
import ToastContainer from './components/Home/ToastContainer';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>

);
