import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LandingRoute } from "./routes/Landing.jsx";
import { PlacesRoute } from "./routes/Places.jsx";
import { Details } from "./routes/places-details/Details.jsx";
import { AttractionsRoute } from "./routes/Attractions.jsx";
import { CountriesRoute } from "./routes/Countries.jsx";
import { ActivitiesRoute } from "./routes/Activities.jsx";
import { BeachesRoute } from "./routes/Beaches.jsx";
import { NotFoundRoute } from "./routes/NotFound.jsx";
import { Survey } from "./routes/Survey.jsx";
import { Results } from "./routes/Results.jsx";
import { NavigationBar } from "@/components/common/NavigationBar.jsx";
import { SurveyLayout } from "@/components/layouts/SurveyLayout.jsx";

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
          Component: Survey,
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
