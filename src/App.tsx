import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";

// 
import { GlobalStyle } from "./assets/style/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
