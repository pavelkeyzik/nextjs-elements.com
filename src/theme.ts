import type { Theme } from "theme-ui";

const theme: Theme = {
  colors: {
    text: "#fff",
    background: "#060606",
    primary: "#5690f2",
    secondary: "#e0f",
    muted: "#191919",
    highlight: "#29112c",
    gray: "#999",
    purple: "#c0f",
  },
  layout: {
    container: {
      maxWidth: 1140,
      px: 4,
    },
  },
  cards: {
    primary: {
      bg: "primary",
    },
    secondary: {
      bg: "muted",
    },
  },
  links: {
    styles: {
      a: {
        color: "white",
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
  buttons: {
    primary: {
      bg: "#2d75d3",
      color: "white",
      cursor: "pointer",
      transition: "background .2s",
      display: "flex",
      alignItems: "center",

      ":hover": {
        bg: "primary",
      },
    },
    secondary: {
      bg: "transparent",
      color: "#fff",
      border: "1px solid #fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: "color .2s, border-color .2s",
    },
    tertiary: {
      bg: "transparent",
      color: "#ccc",
      border: "1px solid #ccc",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: "color .2s, border-color .2s",

      ":hover": {
        borderColor: "#fff",
        color: "#fff",
      },
    },
    icon: {
      bg: "transparent",
      color: "#ccc",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: "color .2s",

      ":hover": {
        color: "#fff",
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
  // "prism": {
  //   ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
  //     "color": "gray"
  //   },
  //   ".comment": {
  //     "fontStyle": "italic"
  //   },
  //   ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
  //     "color": "purple"
  //   },
  //   ".atrule,.attr-value,.keyword": {
  //     "color": "primary"
  //   },
  //   ".selector,.attr-name,.string,.char,.builtin,.inserted": {
  //     "color": "secondary"
  //   }
  // }
};

export { theme };
