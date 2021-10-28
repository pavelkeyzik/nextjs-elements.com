import { ThemeProvider } from "theme-ui";
import { Layout } from "../components/layouts/Layout";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
