import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesComponents;
