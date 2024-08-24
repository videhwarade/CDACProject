import "./style.css";
import ReactDOM from "react-dom";
import App from "./components/App";

// React Routing Start
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Registration } from "./components/Registration";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import InventoryManagement from "./components/Farmer/InventoryManagement";
import Interaction from "./components/Farmer/Interaction";
import OrderProcessing from "./components/Farmer/OrderProcessing";
import QualityAssurance from "./components/Farmer/QualityAssurance";

var projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "farmerinventory",
        element: <InventoryManagement></InventoryManagement>,
      },
      {
        path: "farmerinteraction",
        element: <Interaction></Interaction>,
      },
      {
        path: "farmerorderprocessing",
        element: <OrderProcessing></OrderProcessing>,
      },
      {
        path: "farmerqualityassurance",
        element: <QualityAssurance></QualityAssurance>,
      },
    ],
  },
]);
var ans = ReactDOM.createRoot(document.getElementById("root"));

ans.render(<RouterProvider router={projectroute}></RouterProvider>);
