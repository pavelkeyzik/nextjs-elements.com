import {
  Container,
  Box,
  Grid,
  Input,
  Flex,
  Button,
  Paragraph,
  Heading,
  Text,
} from "@theme-ui/components";
import Image from "next/image";
import { Mail } from "styled-icons/feather";
import HeroIllustration from "../assets/illustrations/hero.svg";
import { config } from "../config";

function Hero() {
  return (
    <Container py={4}>
      <Grid
        gap={4}
        columns={["1fr", "1fr 1fr"]}
        sx={{
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <Box>
          <Heading as="h1" mb={3}>
            Awesome Next.js Templates, Boilerplates, and Starter Kits
          </Heading>
          <Paragraph>
            Discover the best free resources for your Next.js project
          </Paragraph>
          {config.features.subscribeToNewsLetterEnabled ? (
            <Flex mt={4} sx={{ maxWidth: 400 }}>
              <Input
                sx={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRightWidth: 0,
                }}
                placeholder="example@domain.com"
              />
              <Button
                sx={{
                  flexShrink: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <Mail width="16px" strokeWidth={2} />
                <Text ml={2}>Subscribe</Text>
              </Button>
            </Flex>
          ) : null}
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
            display: ["none", "flex"],
            height: "100%",
          }}
        >
          <HeroIllustration width="400px" height="400px" />
        </Box>
      </Grid>
    </Container>
  );
}

export { Hero };
