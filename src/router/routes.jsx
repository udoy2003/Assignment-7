import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage";
import Timeline from "../pages/timeline";
import Stats from "../pages/stats";
import { createBrowserRouter } from "react-router-dom";
import FriendDetails from "../pages/FriendDetails";
import ErrorPage from "../pages/ErrorPage";



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
      },
      {
        path: "/friendsDetails/:id",
        element: <FriendDetails/> ,
        loader : () => fetch( "/friends.json" )
      }
    
    ],
    errorElement: <ErrorPage/>
  },
  
]);