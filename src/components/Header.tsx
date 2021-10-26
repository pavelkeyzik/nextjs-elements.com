import {
  Container,
  Button,
  Flex,
  Heading,
  Link,
  Text,
} from "@theme-ui/components";
import { Upload } from "styled-icons/feather";
import { RouterLink } from "../components/RouterLink";

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
          <RouterLink to="/">
            <Heading as="h2" mr={2}>
              Next.js
            </Heading>
            <Heading as="h2" sx={{ fontWeight: 200 }} mr={5}>
              Elements
            </Heading>
          </RouterLink>
          <Link mr={3} variant="nav" href="#home">
            Latest
          </Link>
          <Link mr={3} variant="nav" href="#categories">
            Categories
          </Link>
          <Link mr={3} variant="nav" href="#resources">
            Resources
          </Link>
          <Link variant="nav" href="#shop">
            Shop
          </Link>
        </Flex>
        <Button ml={4}>
          <Upload width="16px" strokeWidth={2} />
          <Text ml={2}>Submit Template</Text>
        </Button>
      </Flex>
    </Container>
  );
}

export { Header };
