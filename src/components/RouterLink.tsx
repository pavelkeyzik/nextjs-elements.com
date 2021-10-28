import NextLink from "next/link";
import { Link as ThemeUILink, LinkProps } from "@theme-ui/components";

function RouterLink(props: LinkProps) {
  const { href, ...rest } = props;

  return (
    <NextLink href={href || "#"} passHref>
      <ThemeUILink style={{ display: "flex" }} {...rest} />
    </NextLink>
  );
}

export { RouterLink };
