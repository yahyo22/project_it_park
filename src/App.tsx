import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Router from './router/Router';
import { GlobalStyle } from './assets/style/GlobalStyles';
export default function App() {
  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </>
  )
}
