import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {productsApi} from "./features/productsApi";
import productsReducer, { productsFetch } from './features/productsSlice';
import cartReducer from './features/cartSlice';
const store = configureStore({
  reducer:{
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath] : productsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware().concat(productsApi.middleware)
});

store.dispatch(productsFetch())
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

