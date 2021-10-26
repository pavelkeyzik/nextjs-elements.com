import { Button, Flex, Heading, Input, Text } from "@theme-ui/components";
import { Mail } from "styled-icons/feather";
import { ReactComponent as NewsletterIllustration } from "../assets/illustrations/newsletter.svg";

function SidebarSubscribeCard() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 4,
        p: 4,
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "muted",
      }}
    >
      <NewsletterIllustration width="50%" height="50%" />
      <Heading mt={3}>Subscribe To Our Newsletter</Heading>
      <Input mt={3} placeholder="example@domain.com" />
      <Button mt={2} sx={{ width: "100%" }}>
        <Mail width="16px" strokeWidth={2} />
        <Text ml={2}>Subscribe</Text>
      </Button>
    </Flex>
  );
}

export { SidebarSubscribeCard };
