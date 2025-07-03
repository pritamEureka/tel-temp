import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Dashboard/Home";
import UserProfiles from "../pages/UserProfiles";
import AllEvents from "../pages/AllEvents";
import Tickets from "../components/LandingPage/Components/Tickets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <UserProfiles /> },
      { path: "tickets", element: <Tickets /> },
      { path: "all-events", element: <AllEvents /> },
    ],
  },
]);
