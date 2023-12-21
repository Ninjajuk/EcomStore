import { useState } from "react";
import Navbar1 from "../Components/Navbar/Navbar1";
import ProductList from "../Components/products/ProductList";
import Layout from "../Layout";
import "./Home.css";
import Product from "./Product";
function Home() {
  const [sideopen, setSideopen] = useState(false);
  function toggle() {
    setSideopen(!sideopen);
    console.log("Hi there");
  }
  return (
    <>
      <Navbar1 />
      <div className={`main-content ${sideopen ? "expanded" : "collapse"}`}>
        {/* <ProductList/> */}
        <Product />
      </div>
    </>
  );
}

export default Home;
