import { PropsWithChildren } from "react";
import { Box, Button, Flex, Text } from "@theme-ui/components";
import { ArrowRight } from "styled-icons/feather";
import { RouterLink } from "./RouterLink";

type SectionProps = {
  title: string;
  viewAllLink: string;
};

function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <Box pt={4} pb={2}>
      <section>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <h2>{props.title}</h2>
          <RouterLink href={props.viewAllLink}>
            <Button variant="tertiary" as="div">
              <Text mr={2}>View All</Text>
              <ArrowRight width="16px" strokeWidth={3} />
            </Button>
          </RouterLink>
        </Flex>
        {props.children}
      </section>
    </Box>
  );
}

export { Section };
