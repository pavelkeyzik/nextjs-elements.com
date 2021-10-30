import {
  Container,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  Box,
  IconButton,
} from "@theme-ui/components";
import { Upload, Menu, X } from "styled-icons/feather";
import { RouterLink } from "../RouterLink";
import { NavigationMobile } from "./NavigationMobile";
import { useHeader } from "./use-header";

function Header() {
  const state = useHeader();

  return (
    <Container py={4}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box mr={5}>
          <RouterLink href="/">
            <Heading as="h2" mr={2} sx={{ flexShrink: 0 }}>
              Next.js
              <Text sx={{ fontWeight: 200 }}> Elements</Text>
            </Heading>
          </RouterLink>
        </Box>
        <Box
          sx={{
            justifyContent: "space-between",
            flexGrow: 1,
            display: ["none", "none", "flex"],
          }}
        >
          <Flex sx={{ alignItems: "center" }}>
            {state.menuItems.map((menuItem, index) => {
              return (
                <Box mr={3} key={index}>
                  <RouterLink href={menuItem.href}>
                    <Link variant="nav">{menuItem.title}</Link>
                  </RouterLink>
                </Box>
              );
            })}
          </Flex>
          <RouterLink href="/submit-element">
            <Button as="div" sx={{ flexShrink: 0 }}>
              <Upload width="16px" strokeWidth={2} />
              <Text ml={2}>Submit Element</Text>
            </Button>
          </RouterLink>
        </Box>
        <Box
          sx={{
            display: ["flex", "flex", "none"],
          }}
        >
          <IconButton onClick={state.openMenu}>
            <Menu />
          </IconButton>
          <NavigationMobile visible={state.isMenuOpened}>
            <Container
              py={4}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton onClick={state.closeMenu}>
                <X />
              </IconButton>
            </Container>
            <Container>
              <Flex sx={{ flexDirection: "column" }}>
                {state.menuItems.map((menuItem, index) => {
                  return (
                    <Box mb={3} key={index}>
                      <RouterLink href={menuItem.href}>
                        <Link variant="nav" onClick={state.closeMenu}>
                          {menuItem.title}
                        </Link>
                      </RouterLink>
                    </Box>
                  );
                })}
                <RouterLink href="/submit-element" onClick={state.closeMenu}>
                  <Button as="div" sx={{ flexShrink: 0 }}>
                    <Upload width="16px" strokeWidth={2} />
                    <Text ml={2}>Submit Element</Text>
                  </Button>
                </RouterLink>
              </Flex>
            </Container>
          </NavigationMobile>
        </Box>
      </Flex>
    </Container>
  );
}

export { Header };
