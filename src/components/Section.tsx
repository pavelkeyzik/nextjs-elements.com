import { PropsWithChildren } from "react";
import { Box, Button, Flex, Text } from "@theme-ui/components";
import { ArrowRight } from "styled-icons/feather";

type SectionProps = {
  title: string;
};

function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <Box pt={4} pb={2}>
      <section>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <h2>{props.title}</h2>
          <Button variant="secondary">
            <Text mr={2}>View All</Text>
            <ArrowRight width="16px" strokeWidth={3} />
          </Button>
        </Flex>
        {props.children}
      </section>
    </Box>
  );
}

export { Section };
