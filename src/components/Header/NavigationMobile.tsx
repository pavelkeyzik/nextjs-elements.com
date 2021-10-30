import { PropsWithChildren } from "react";
import { Box } from "@theme-ui/components";

type NavigationMobileProps = {
  visible: boolean;
};

function NavigationMobile(props: PropsWithChildren<NavigationMobileProps>) {
  if (!props.visible) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 15,
        bg: "rgba(0,0,0,.9)",
        backdropFilter: "blur(4px)",
      }}
    >
      {props.children}
    </Box>
  );
}

export { NavigationMobile };
