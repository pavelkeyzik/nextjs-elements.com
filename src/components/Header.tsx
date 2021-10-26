import {
  Container,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  Box,
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
          <Box mr={5}>
            <RouterLink to="/">
              <Heading as="h2" mr={2}>
                Next.js
              </Heading>
              <Heading as="h2" sx={{ fontWeight: 200 }}>
                Elements
              </Heading>
            </RouterLink>
          </Box>
          <Box mr={3}>
            <RouterLink to="/categories">
              <Link variant="nav">Categories</Link>
            </RouterLink>
          </Box>
          <Box mr={3}>
            <RouterLink to="/records">
              <Link variant="nav">Resources</Link>
            </RouterLink>
          </Box>
        </Flex>
        <RouterLink to="/submit-element">
          <Button as="div">
            <Upload width="16px" strokeWidth={2} />
            <Text ml={2}>Submit Element</Text>
          </Button>
        </RouterLink>
      </Flex>
    </Container>
  );
}

export { Header };
