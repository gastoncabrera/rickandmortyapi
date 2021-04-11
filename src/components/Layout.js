import React from "react";

import Navbar from "./Navbar";
import Footer from "../components/Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
