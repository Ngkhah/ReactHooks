import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Notfound from "./Notfound";
import Invoices from "./pages/Invoices";
import Expenses from "./pages/Expenses";
import Item from "./pages/item";
import NewItem from "./pages/NewItem";
import TestHooks from "./pages/TestHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<App />}> */}
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<h2 style={{paddingLeft:"20px"}}>Please select an item</h2>} />
            <Route path=":dataID" element={<Item />} />
            <Route path="new" element={<NewItem />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route path="testhooks" element={<TestHooks/>}/>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
