import {
  Box,
  Container,
  Text,
  Flex,
  Button,
  IconButton,
} from "@theme-ui/components";
import { Twitter, Github } from "styled-icons/feather";

function Footer() {
  return (
    <Box mt={2}>
      <Container py={4}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text color="gray">Copyrighty &copy; 2021</Text>
          <Flex>
            <IconButton mr={2}>
              <Twitter width="16px" strokeWidth={3} />
            </IconButton>
            <IconButton>
              <Github width="16px" strokeWidth={3} />
            </IconButton>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export { Footer };
