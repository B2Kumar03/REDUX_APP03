import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <ChakraProvider>
     <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </ChakraProvider>
//   </BrowserRouter>
);
