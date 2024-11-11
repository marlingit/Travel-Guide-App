import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LandingRoute } from "./routes/Landing";
import { PlacesRoute } from "./routes/Places";
import { Details } from "./routes/places-details/Details";
import { AttractionsRoute } from "./routes/Attractions";
import { CountriesRoute } from "./routes/Countries";
import { ActivitiesRoute } from "./routes/Activities";
import { BeachesRoute } from "./routes/Beaches";
import { NotFoundRoute } from "./routes/NotFound";
import { Questions } from "./routes/Questions";
import { Results } from "./routes/Results";
import { NavigationBar } from "@/components/common";
import { SurveyLayout } from "@/components/layouts";

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
    {
      Component: SurveyLayout,
      children: [
        {
          path: "/attractions/survey/",
          Component: Questions,
          ErrorBoundary: NotFoundRoute,
        },
        {
          path: "/attractions/survey/results",
          Component: Results,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
