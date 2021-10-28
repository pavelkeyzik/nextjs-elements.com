import type { Theme, ColorModesScale } from "theme-ui";
import color from "color";

const colors: ColorModesScale = {
  text: "white",
  background: "#060606",
  primary: "#5690f2",
  secondary: "#e0f",
  muted: "#191919",
  highlight: "#29112c",
  gray: "#999",
  purple: "#c0f",
};

const theme: Theme = {
  colors,
  layout: {
    container: {
      maxWidth: 1140,
      px: 4,
    },
  },
  cards: {
    primary: {
      bg: "primary",
      color: "text",
    },
    secondary: {
      bg: "muted",
      color: "text",
    },
  },
  links: {
    styles: {
      a: {
        color: "text",
        textDecoration: "none",
        transition: "color .2s",

        ":hover": {
          color: "primary",
        },
      },
    },
    nav: {
      variant: "links.styles.a",
    },
  },
  badges: {
    primary: {
      px: 2,
      py: 1,
    },
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "text",
      cursor: "pointer",
      transition: "background .2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      ":hover": {
        bg: color(colors.primary).darken(0.05).hex(),
      },
    },
    secondary: {
      bg: "transparent",
      color: "text",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "text",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "color .2s, border-color .2s",
    },
    tertiary: {
      bg: "transparent",
      color: color(colors.text).darken(0.3).hex(),
      border: `1px solid ${color(colors.text).darken(0.3).hex()}`,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "color .2s, border-color .2s",

      ":hover": {
        borderColor: "text",
        color: "text",
      },
    },
    icon: {
      bg: "transparent",
      color: color(colors.text).darken(0.3).hex(),
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: "color .2s",

      ":hover": {
        color: "text",
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  forms: {
    input: {
      borderColor: "gray",
      px: 3,
    },
    label: {
      fontWeight: "bold",
      mb: 1,
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.display",
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",

      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
  },
};

export { theme };
