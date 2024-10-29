import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import ProductScreen from "./screens/ProductScreen.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="product/:id" element={<ProductScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
