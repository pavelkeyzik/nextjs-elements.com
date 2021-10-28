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
            Free Next.js Resources, Tools and Templates
          </Heading>
          <Paragraph>
            Discover the best free UI Kits, Icons, Templates, Mockups, Style
            Guides, Illustrations, and more resources for Next.js
          </Paragraph>
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
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
            display: ["none", "flex"],
            height: "100%",
          }}
        >
          <Image
            src="/assets/illustrations/hero.svg"
            width={400}
            height={400}
          />
        </Box>
      </Grid>
    </Container>
  );
}

export { Hero };
