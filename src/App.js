import "./App.css";
import { Link ,Outlet} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <p>TEST ROUTER</p>
      <nav style={{ borderBottom: "1px solid", paddingBottom:"20px" }}>
        <Link to="invoices" style={{ margin: "20px" }}>
          Invoices
        </Link>{" "}
        |{" "}
        <Link to="expenses" style={{ margin: "20px" }}>
          Expenses
        </Link>{" "}
        |{" "}
        <Link to="testhooks" style={{ margin: "20px" }}>
          TestHooks
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
