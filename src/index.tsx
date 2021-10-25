import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";
import { HomePage } from "./pages/HomePage";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
