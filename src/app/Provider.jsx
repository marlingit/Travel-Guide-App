import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallback } from "@/components/errors/main";
import { SurveyProvider } from "./providers/SurveyProvider";

export const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <SurveyProvider>{children}</SurveyProvider>
    </ErrorBoundary>
  );
};
