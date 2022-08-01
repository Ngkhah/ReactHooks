import React from "react";
import data from "../data/invoices";
import { Link, Outlet } from "react-router-dom";

const Invoices = () => {
  const { productItems } = data;
  return (
    <main>
      <h2>Invoices</h2>
      <Link to="new">Create item new</Link>
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "10px", borderRight: "1px solid" }}>
          {/* {productItems.map((productItem) => (
            <Link
              style={{
                display: "block",
                margin: "1rem",
                color: "black",
                textDecoration: "none",
                textAlign: "left",
              }}
              to={`${productItem.id}`}
              key={productItem.id}
            >
              {" "}
              {productItem.name}
            </Link>
          ))} */}
          {productItems.map((productItem) => (
            <Link
              style={{
                display: "block",
                margin: "1rem",
                color: "black",
                textDecoration: "none",
                textAlign: "left",
              }}
              to={productItem.id.toString()}
              key={productItem.id}
            >
              {" "}
              {productItem.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    </main>
  );
};

export default Invoices;
