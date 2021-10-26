import { Box, Container, Text, Flex } from "@theme-ui/components";

function Footer() {
  return (
    <Box mt={2}>
      <Container py={4}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text color="gray">Copyrighty &copy; 2021</Text>
        </Flex>
      </Container>
    </Box>
  );
}

export { Footer };
