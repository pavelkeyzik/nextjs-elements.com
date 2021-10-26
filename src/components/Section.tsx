import { PropsWithChildren } from "react";
import { Box, Button, Flex } from "@theme-ui/components";

type SectionProps = {
  title: string;
};

function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <Box pt={4} pb={2}>
      <section>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <h2>{props.title}</h2>
          <Button variant="secondary">View All</Button>
        </Flex>
        {props.children}
      </section>
    </Box>
  );
}

export { Section };
