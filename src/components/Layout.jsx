import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";

function Layout() {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
}

export default Layout;
