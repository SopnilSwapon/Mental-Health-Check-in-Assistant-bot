import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mood from "./Mood";
import Chatbot from "./AIResponse";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
  },
   
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//const geminiApiKey = "AIzaSyAtWbjP0TbjSy0bZkG7-69EjORVT1TCSGg";