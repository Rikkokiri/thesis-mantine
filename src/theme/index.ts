import { createTheme, CSSVariablesResolver } from "@mantine/core";
import { colors } from "./colors";

export const themeOverride = createTheme({
  /** rem units scale, change if you customize font-size of `<html />` element
   *  default value is `1` (for `100%`/`16px` font-size on `<html />`)
   */
  scale: 1,
  /** Put your mantine theme override here */
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  // primaryColor: // TODO Mantine: Set primary color
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    smd: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "1.75rem",
    xxl: "2rem",
  },
  /** Index of theme.colors[color].
   *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
   *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
   *  Default value `{ light: 6, dark: 8 }`
   *
   *  For example,
   *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
   *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
   * */
  // primaryShade: MantineColorShade | MantinePrimaryShade; // TODO
  /** Key of `theme.colors`, hex/rgb/hsl values are not supported.
   *  Determines which color will be used in all components by default.
   *  Default value – `blue`.
   * */
  // primaryColor: "#131415",
  /* primaryColor: "blueBlack",
  primaryShade: { light: 9, dark: 0 }, */
  colors: colors,
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
  /** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
  defaultRadius: "xs",
  /** Object of values that are used to set `border-radius` in all components that support it */
  // radius: MantineRadiusValues; // TODO Mantine: Set radius values
  /** Object of values that are used to add `box-shadow` styles to components that support `shadow` prop */
  // shadows: MantineShadowsValues; // TODO Mantine: Set shadow values
  shadows: {
    modal: "rgba(0, 0, 0, 16%) 0 3px 6px 0, rgba(0, 0, 0, 23%) 0 3px 6px 0",
    matchBar: "rgba(0, 0, 0, 19%) 0 2px 4px 0",
  },
  /** Allows adding `classNames`, `styles` and `defaultProps` to any component */
  components: {
    Divider: {},
  },
  other: {
    matchBarHeight: "76px",
    toolbarHeight: "72px",
    toolbarMaxWidth: "1080px",
    radioRangeMaxWidth: "343px",
    commentMaxWidth: "343px",
    modalMaxWidth: "343px",
    modalMinWidth: "300px",
    modalMaxHeight: "550px",
    modalMinHeight: "120px",
  },
});

export const cssResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--match-bar-height": theme.other.matchBarHeight,
    "--toolbar-height": theme.other.toolbarHeight,
    "--toolbar-max-width": theme.other.toolbarMaxWidth,
    "--radio-range-max-width": theme.other.radioRangeMaxWidth,
    "--comment-max-width": theme.other.commentMaxWidth,
    "--modal-max-width": theme.other.modalMaxWidth,
    "--modal-min-width": theme.other.modalMinWidth,
    "--modal-max-height": theme.other.modalMaxHeight,
    "--modal-min-height": theme.other.modalMinHeight,
  },
  light: {},
  dark: {},
});
