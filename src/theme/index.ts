import { createTheme, CSSVariablesResolver } from "@mantine/core";
import { colors } from "./colors";
import { componentStyles } from "./components";

export const themeOverride = createTheme({
  /** Controls focus ring styles. Supports the following options:
   *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
   *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
   *  - `never` – focus ring is always hidden (not recommended)
   */
  focusRing: "auto",
  /** rem units scale, change if you customize font-size of `<html />` element
   *  default value is `1` (for `100%`/`16px` font-size on `<html />`)
   */
  scale: 1,
  /** Determines whether `font-smoothing` property should be set on the body, `true` by default */
  fontSmoothing: true,

  /** White color */
  white: "#fff",

  /** Black color */
  black: "#000",

  /** Put your mantine theme override here */
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",

  /** Object of values that are used to set various CSS properties that control spacing between elements */
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    smd: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "1.75rem",
    xxl: "2rem",
  },

  /** Object of colors, key is color name, value is an array of at least 10 strings (colors) */
  colors: colors,

  /** Key of `theme.colors`, hex/rgb/hsl values are not supported.
   *  Determines which color will be used in all components by default.
   *  Default value – `blue`.
   * */
  // primaryColor: string;
  // Skipping primary color definition as I'm operating via CSS variables and not relying on Mantine's color logic
  // primaryColor: "primary",

  /** Index of theme.colors[color].
   *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
   *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
   *  Default value `{ light: 6, dark: 8 }`
   *
   *  For example,
   *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
   *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
   * */
  // primaryShade: MantineColorShade | MantinePrimaryShade;

  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */
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
  components: componentStyles,

  /** Any other properties that you want to access with the theme objects */
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
    cardMaxWidth: "680px",
  },
});

export const cssResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // If variables defined via section "other" are only used via these
    // variables, then it might be better to define them directly here.
    "--match-bar-height": theme.other.matchBarHeight,
    "--toolbar-height": theme.other.toolbarHeight,
    "--toolbar-max-width": theme.other.toolbarMaxWidth,
    "--radio-range-max-width": theme.other.radioRangeMaxWidth,
    "--comment-max-width": theme.other.commentMaxWidth,
    "--modal-max-width": theme.other.modalMaxWidth,
    "--modal-min-width": theme.other.modalMinWidth,
    "--modal-max-height": theme.other.modalMaxHeight,
    "--modal-min-height": theme.other.modalMinHeight,
    // Color variables. Could be defined via theme, but then bunch of extra variables
    // that I don't need (and cannot control) are generated by Mantine.
    // One downside of defining variables in this format, is that I cannot see previews of colors in editor.
    "--yle-logo": "#00b4c8",
    "--dark-blue": "#1a2b4a",
    "--blue-black": "#131415" /* rgb(19, 20, 21); */,

    /* Grayscale */
    "--gray-5": "#f8f9fa" /* rgb(248, 249, 250) */,
    "--gray-10": "#f1f2f4",
    "--gray-20": "#e8e9eb",
    "--gray-30": "#d8d9db",
    "--gray-40": "#b4b6b7",
    "--gray-50": "#949697",
    "--gray-60": "#4a4f54",
    "--gray-70": "#323639",
    "--gray-80": "#292b2d",
    "--gray-90": "#1f2123",
    "--gray-95": "#131415",

    "--black-9": "rgba(0, 0, 0, 0.09)",
    "--black-15": "rgba(0, 0, 0, 15%)",
    "--black-41": "rgba(0, 0, 0, 41%)",
    "--black-70": "rgba(0, 0, 0, 70%)",
    "--white-17": "rgba(255, 255, 255, 17%)",
    "--white-21": "rgba(255, 255, 255, 21%)",
    "--white-71": "rgba(255, 255, 255, 71%)",

    /* Semantic colors in light theme */
    "--error": "#d72a56",
    "--success": "#058657",

    /* Semantic colors in dark theme */
    "--live-red": "#e90e43",
    "--green-bright": "#06b173",

    /* Candidate colors */
    "--ant-blue": "#1677ff",
    "--mantine-blue": "#339af0",
    "--chakra-teal": "#319795",
    "--shadcn-black": "#18181b",
  },
  // With this approach, it might be possible to enforce (via TypeScript) that light and dark
  // themes have same variables defined. (Just a curiosity, not sure if it's worth it.)
  light: {
    // Original theme variables:
    "--primary": "var(--blue-black)",
    "--text-primary": "var(--blue-black)",
    "--text-negative": "#fff",
    "--heading-primary": "var(--dark-blue)",
    "--bg-body": "var(--gray-10)",
    "--focus-outline-primary": "var(--blue-black)",
    "--toolbar-bg": "#fff",
    "--footer-bg": "var(--gray-5)",

    /* Button colors */
    "--button-solid-bg": "var(--blue-black)",
    "--button-solid-bg-hover": "var(--black-70)",
    "--button-outline": "var(--blue-black)",
    "--button-outline-bg-hover": "var(--black-9)",
    "--button-outline-disabled": "var(--black-15)",
    "--button-solid-hover": "var(--black-70)",
    "--button-toggled-bg": "var(--black-9)",

    /* Radio buttons */
    "--radio-button-agree": "var(--success)",
    "--radio-background": "var(--gray-30)",

    /* Modals */
    "--modal-backdrop": "var(--black-41)",
    "--modal-bg": "#fff",
    "--modal-box-shadow": "rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px",

    /* Agree and disagree bg colors */
    "--agree": "var(--success)",
    "--disagree": "var(--error)",

    /* Cards */
    "--card-bg": "#fff",
    "--section-card-header-border": "2px solid var(--gray-20)",
    "--tag-default-bg": "var(--blue-black)",
    "--tag-default-text": "var(--text-negative)",
    "--tag-negative-bg": "var(--gray-5)",
    "--tag-negative-text": "#000",

    /* Candidate answers */
    "--candidate-comment-bg": "var(--gray-20)",
    "--candidate-answer-number-bg": "var(--gray-5)",
    "--candidate-img-placeholder": "var(--gray-10)",
    "--user-answer-bubble-text": "var(--gray-5)",
    "--separator": "var(--gray-30)",

    /* Match results */
    "--match-bar-shadow": "rgba(0, 0, 0, 19%) 0 2px 4px 0",
    "--match-placeholder-bg": "var(--gray-10)",

    // ---- Overriding Mantine's CSS variables ----
    "--mantine-color-text": "var(--blue-black)",
    "--mantine-color-body": "var(--bg-body)",
  },
  dark: {
    // Original theme variables:
    "--primary": "var(--gray-5)",
    "--text-primary": "var(--gray-5)",
    "--text-negative": "var(--blue-black)",
    "--heading-primary": "#fff",
    "--bg-body": "#000",
    "--focus-outline-primary": "var(--gray-5)",
    "--toolbar-bg": "var(--blue-black)",
    "--footer-bg": "var(--gray-90)",

    /* Button colors */
    "--button-solid-bg": "var(--gray-5)",
    "--button-solid-bg-hover": "var(--white-71)",
    "--button-outline": "var(--gray-5)",
    "--button-outline-bg-hover": "var(--white-17)",
    "--button-outline-disabled": "var(--white-21)",
    "--button-solid-hover": "var(--white-71)",
    "--button-toggled-bg": "var(--white-17)",

    /* Radio buttons */
    "--radio-button-agree": "var(--success)",
    "--radio-background": "var(--gray-60)",

    /* Modals */
    "--modal-backdrop": "var(--black-70)",
    "--modal-bg": "var(--gray-90)",
    "--modal-box-shadow": "rgba(0, 0, 0, 16%) 0 3px 6px 0, rgba(0, 0, 0, 23%) 0 3px 6px 0",

    /* Agree and disagree bg colors */
    "--agree": "var(--green-bright)",
    "--disagree": "var(--live-red)",

    /* Cards */
    "--card-bg": "var(--blue-black)",
    "--section-card-header-border": "2px solid var(--gray-60)" /* rgb(74, 79, 84) */,
    "--tag-default-bg": "var(--gray-5)",
    "--tag-default-text": "var(--text-negative)",
    "--tag-negative-bg": "var(--gray-5)",
    "--tag-negative-text": "#000",

    /* Candidate answers */
    "--candidate-comment-bg": "var(--gray-90)",
    "--candidate-answer-number-bg": "var(--gray-5)",
    "--candidate-img-placeholder": "var(--gray-10)",
    "--user-answer-bubble-text": "var(--blue-black)",
    "--separator": "var(--gray-60)",

    /* Match results */
    "--match-bar-shadow": "rgba(0, 0, 0, 19%) 0 2px 4px 0",
    "--match-placeholder-bg": "var(--gray-80)",

    // ---- Overriding Mantine's CSS variables ----
    "--mantine-color-text": "var(--gray-5)",
    "--mantine-color-body": "var(--bg-body)",
  },
});
