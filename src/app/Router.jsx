import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LandingRoute } from "./routes/Landing";
import { PlacesRoute } from "./routes/Places";
import { Details } from "./routes/places-details/Details";
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
      Component: NavigationBar,
      children: [
        {
          index: true,
          Component: LandingRoute,
        },
        {
          path: "places",
          Component: PlacesRoute,
          children: [
            {
              path: "details/:id",
              Component: Details,
            },
          ],
        },
        {
          path: "attractions",
          Component: AttractionsRoute,
          children: [
            {
              path: "survey",
              Component: () => <div>Survey</div>,
              children: [
                {
                  path: ":question",
                },
                {
                  path: "results",
                },
              ],
            },
          ],
        },
        {
          path: "countries",
          Component: CountriesRoute,
        },
        {
          path: "activities",
          Component: ActivitiesRoute,
        },
        {
          path: "beaches",
          Component: BeachesRoute,
        },
        {
          path: "*",
          Component: NotFoundRoute,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
