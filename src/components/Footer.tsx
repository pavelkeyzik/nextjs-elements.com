import {
  Box,
  Container,
  Text,
  Flex,
  IconButton,
  Link,
} from "@theme-ui/components";
import { Twitter, Github } from "styled-icons/feather";

function Footer() {
  return (
    <Box mt={2}>
      <Container py={4}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text color="gray">Copyright &copy; 2021</Text>
          <Flex>
            <Box mr={2}>
              <Link href="https://twitter.com/pavelkeyzik" target="_blank">
                <IconButton as="div">
                  <Twitter width="16px" strokeWidth={3} />
                </IconButton>
              </Link>
            </Box>
            <Link href="https://github.com/pavelkeyzik" target="_blank">
              <IconButton as="div">
                <Github width="16px" strokeWidth={3} />
              </IconButton>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export { Footer };
