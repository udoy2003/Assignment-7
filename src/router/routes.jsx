import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage";
import Timeline from "../pages/timeline";
import Stats from "../pages/stats";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/stats",
        element: <Stats />
      }
    ],
    errorElement: <h1>This page is not found</h1>
  },
  
]);