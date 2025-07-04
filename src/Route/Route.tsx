import { createBrowserRouter } from "react-router-dom";

import UserProfiles from "../pages/UserProfiles";
import AllEvents from "../pages/AllEvents";
import Tickets from "../components/LandingPage/Components/Tickets";
import HomePage from "../pages/UserPage/HomePage";
import UserLayout from "../fontend/layout/UserLayout";
import Home from "../pages/Dashboard/Home";
import AppLayout from "../layout/AppLayout";
import EventsPage from "../pages/UserPage/EventsPage";
import IndustryLayout from "../fontend/IndustryLayout/IndustryLayout";
import IndustryHomepage from "../pages/IndustryPage/IndustryHomepage";
import ArtistsLayout from "../fontend/ArtistsLayout/ArtistsLayout";
import ArtistsHomepage from "../pages/ArtistsHomepage/ArtistsHomepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
    ],
  },
  {
    path: "/industry",
    element: <IndustryLayout />,
    children: [
      { index: true, element: <IndustryHomepage /> },
      { path: "events", element: <EventsPage /> },
    ],
  },
  {
    path: "/artists",
    element: <ArtistsLayout />,
    children: [
      { index: true, element: <ArtistsHomepage /> },
      { path: "events", element: <EventsPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <UserProfiles /> },
      { path: "tickets", element: <Tickets /> },
      { path: "/dashboard/all-events", element: <AllEvents /> },
    ],
  },
]);
