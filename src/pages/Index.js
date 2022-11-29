import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Index() {
  return (
    <>
      {/* <!-- header section strats --> */}
      <Header />
      {/* <!-- end header section --> */}
      {/* <!-- slider section --> */}
      <Outlet />

      {/* <!-- end contact section -->

  <!-- info section --> */}
      <Footer />
    </>
  );
}
