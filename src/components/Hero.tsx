import {
  Container,
  Box,
  Grid,
  Input,
  Flex,
  Button,
  Paragraph,
  Heading,
} from "@theme-ui/components";
import { ReactComponent as HeroIllustration } from "../assets/illustrations/hero.svg";

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
              Subscribe
            </Button>
          </Flex>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
            display: ["none", "flex"],
          }}
        >
          <HeroIllustration width="70%" height="70%" />
        </Box>
      </Grid>
    </Container>
  );
}

export { Hero };