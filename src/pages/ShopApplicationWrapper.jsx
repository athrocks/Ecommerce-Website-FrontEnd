import React from "react";
import { Navigation, Spinner } from "../components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ShopApplicationWrapper() {
  const isLoading = useSelector((state) => state?.commonState?.loading);

  return (
    <div>
      <Navigation />
      <Outlet />
      {isLoading && <Spinner />}
    </div>
  );
}

export default ShopApplicationWrapper;
