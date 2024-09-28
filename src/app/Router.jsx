import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingRoute } from "./routes/Landing";
import { PlacesRoute } from "./routes/Places";
import { AttractionsRoute } from "./routes/Attractions";
import { CountriesRoute } from "./routes/Countries";
import { ActivitiesRoute } from "./routes/Activities";
import { BeachesRoute } from "./routes/Beaches";
import { NotFoundRoute } from "./routes/NotFound";
import { NavigationBar } from "@/components/common";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavigationBar />
          <LandingRoute />
        </>
      ),
      errorElement: (
        <>
          <NavigationBar />
          <NotFoundRoute />
        </>
      ),
    },
    {
      path: "/places",
      element: (
        <>
          <NavigationBar />
          <PlacesRoute />
        </>
      ),
    },
    {
      path: "/attractions",
      element: (
        <>
          <NavigationBar />
          <AttractionsRoute />
        </>
      ),
    },
    {
      path: "/countries",
      element: (
        <>
          <NavigationBar />
          <CountriesRoute />
        </>
      ),
    },
    {
      path: "/activities",
      element: (
        <>
          <NavigationBar />
          <ActivitiesRoute />
        </>
      ),
    },
    {
      path: "/beaches",
      element: (
        <>
          <NavigationBar />
          <BeachesRoute />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
