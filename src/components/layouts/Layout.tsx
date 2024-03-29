import { PropsWithChildren } from "react";
import Head from "next/head";
import { Flex } from "@theme-ui/components";
import { Header } from "../Header";
import { Footer } from "../Footer";

function Layout(props: PropsWithChildren<unknown>) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Next.js Elements | Free Templates and Boilerplates</title>
      </Head>
      <Header />
      <Flex
        sx={{
          flexDirection: "column",
          flex: 1,
        }}
      >
        {props.children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export { Layout };
