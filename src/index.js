import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Components/error-page";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";

const router = createHashRouter([
  {
    path: "/cleaning-site",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/cleaning-site/Home",
        element: <Home />,
      },
      {
        path: "/cleaning-site/Contact",
        element: <Contact />,
      },
      {
        path: "/cleaning-site/Services",
        element: <Services />,
      },
      {
        path: "/cleaning-site/AboutUs",
        element: <AboutUs />,
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
