import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Flex } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RecordInformationPage } from "./pages/RecordInformationPage";
import { theme } from "./theme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Flex
          sx={{
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Flex
            sx={{
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Switch>
              <Route path="/records/:id">
                <RecordInformationPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Flex>
          <Footer />
        </Flex>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
