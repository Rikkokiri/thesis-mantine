import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** rem units scale, change if you customize font-size of `<html />` element
   *  default value is `1` (for `100%`/`16px` font-size on `<html />`)
   */
  scale: 1,
  /** Put your mantine theme override here */
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  // primaryColor: "#131415",
  colors: {
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider
   * and Title components */
  fontSizes: {
    // TODO: These match the default values, no need to redeclare them
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
  },
  /* theme.lineHeights property defines line-height values for Text component,
   * most other components use theme.lineHeights.md by default.
   * Each key customizes the line-height for the corresponding Text size.
   */
  lineHeights: {
    xs: "1.5",
    sm: "1.5",
    md: "1.5",
    xxl: "1.5",
  },
  headings: {
    sizes: {
      h1: {
        fontSize: "2rem",
        fontWeight: "700",
        lineHeight: "1.2",
        // TODO: color: var(--heading-primary);
      },
      h2: {
        fontSize: "1.75rem", // 28px
        fontWeight: "900",
        lineHeight: "1.3",
        // TODO: color: var(--heading-primary);
      },
      h3: {
        fontSize: "1.25rem", // 18px
        fontWeight: "900",
        lineHeight: "1.4",
        // TODO: color: var(--text-primary);
      },
      h4: {
        fontSize: "1.125rem", // 18px
        fontWeight: "600",
        // TODO: color: var(--text-primary);
      },
    },
  },

  // components: {},
});
