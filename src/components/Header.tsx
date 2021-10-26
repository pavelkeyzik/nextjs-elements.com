import { Container, Button, Flex, Heading, Link } from "@theme-ui/components";

function Header() {
  return (
    <Container py={4}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Flex sx={{ alignItems: "center" }}>
          <Heading as="h2" mr={5}>
            Next.js Elements
          </Heading>
          <Link mr={3} variant="nav" href="#home">
            Latest
          </Link>
          <Link mr={3} variant="nav" href="#categories">
            Categories
          </Link>
          <Link mr={3} variant="nav" href="#resources">
            Resourced
          </Link>
          <Link variant="nav" href="#shop">
            Shop
          </Link>
        </Flex>
        <Button ml={4}>Submit Template</Button>
      </Flex>
    </Container>
  );
}

export { Header };
