import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "pages/App";
import Login from "pages/Login";
import NotFound from "pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} /> {/*精確匹配 exact*/}
      <Route path="/login/:nickname" element={<Login />} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default Router;
