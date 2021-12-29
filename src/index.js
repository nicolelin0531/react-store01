import React from "react";
import ReactDom from "react-dom";
import Router from "Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "css/app.scss";
import "css/style.scss";
import "css/fs-icon.ttf";
import "css/fs_style.css";
import "css/fs_theme.css";
import "css/fs_original.css";
import "commons/auth";

ReactDom.render(
  <div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
    <Router />
  </div>,
  document.getElementById("root")
);
