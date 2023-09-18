import { GlobalStyles } from "./themes/globalStyles";

import React from "react";
import { AppRoutes } from "./routes/routes";
import { BackgroundProvider } from "./context/themeContext";

export const App = () => {

  return (
    <BackgroundProvider>
      <GlobalStyles />
      <AppRoutes />
    </BackgroundProvider>
  );
}