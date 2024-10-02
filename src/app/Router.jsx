import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LandingRoute } from "./routes/Landing";
import { PlacesRoute } from "./routes/Places";
import { ImageModal } from "./routes/image-modal/ImageModal";
import { AttractionsRoute } from "./routes/Attractions";
import { CountriesRoute } from "./routes/Countries";
import { ActivitiesRoute } from "./routes/Activities";
import { BeachesRoute } from "./routes/Beaches";
import { NotFoundRoute } from "./routes/NotFound";
import { NavigationBar } from "@/components/common";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <NavigationBar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          Component: LandingRoute,
          ErrorBoundary: NotFoundRoute,
        },
        {
          path: "/places",
          Component: PlacesRoute,
          children: [
            {
              path: "details/:id",
              Component: ImageModal,
            },
          ],
        },
        {
          path: "/attractions",
          Component: AttractionsRoute,
        },
        {
          path: "/countries",
          Component: CountriesRoute,
        },
        {
          path: "/activities",
          Component: ActivitiesRoute,
        },
        {
          path: "/beaches",
          Component: BeachesRoute,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
