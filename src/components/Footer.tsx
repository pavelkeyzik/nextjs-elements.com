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
          <Text color="gray" sx={{ fontSize: 1 }}>
            Copyright &copy; 2021
          </Text>
          <Flex sx={{ alignItems: "center" }}>
            <Text sx={{ color: "gray", mr: 2, fontSize: 1 }}>
              Developed by{" "}
            </Text>
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
