import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Label,
  Text,
  Paragraph,
} from "@theme-ui/components";
import { Upload } from "styled-icons/feather";
import { config } from "../config";
function SubmitElementPage() {
  if (!config.features.submitElementEnabled) {
    return <Container>This feature is not ready yet</Container>;
  }

  return (
    <Container>
      <Box sx={{ borderRadius: 4, p: 3, mb: 3 }}>
        <Heading as="h1" pb={3} sx={{ textAlign: "center" }}>
          Submit Element
        </Heading>
        <Paragraph sx={{ textAlign: "center" }}>
          To submit element, please fill the form below.
        </Paragraph>
      </Box>
      <Box as="form" sx={{ maxWidth: 480, margin: "0 auto" }}>
        <Label>Resource Title</Label>
        <Input placeholder="Personal Blog Template" mb={3} />
        <Label>Email</Label>
        <Input placeholder="example@domain.com" mb={3} />
        <Label>Link to GitHub repo with documentation</Label>
        <Input placeholder="https://github.com/user/repo" mb={3} />
        <Label>Link to cover image</Label>
        <Input placeholder="https://drive.google.com/something" mb={3} />
        <Button sx={{ width: "100%" }}>
          <Upload width="16px" strokeWidth={2} />
          <Text ml={2}>Submit Element</Text>
        </Button>
      </Box>
    </Container>
  );
}

export default SubmitElementPage;
