import { AppRouter } from "./Router";
import { AppProvider } from "./Provider";

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
