import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/error-page";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import Residential from "./Components/Services/Residential";
import MoveInCleaning from "./Components/Services/Move-In-Cleaning";
import MoveOutCleaning from "./Components/Services/Move-Out-Cleaning";
import Commercial from "./Components/Services/Commercial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Residential",
        element: <Residential />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Move-Out-Cleaning",
        element: <MoveOutCleaning />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Commercial",
        element: <Commercial />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Move-In-Cleaning",
        element: <MoveInCleaning />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
