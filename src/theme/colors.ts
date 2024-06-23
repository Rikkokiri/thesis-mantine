import { colorsTuple, MantineThemeColors } from "@mantine/core";
import { virtualColor } from "@mantine/core";

/* Base color palette that will be utilized to define themed colors below (light & dark mode) */
const baseColors: Partial<MantineThemeColors> = {
  gray: [
    "#f8f9fa", // --gray-5 = mantine-color-gray-0
    "#f1f2f4", // --gray-10 = mantine-color-gray-1
    "#e8e9eb", // --gray-20 = mantine-color-gray-2
    "#d8d9db", // --gray-30 = mantine-color-gray-3
    "#b4b6b7", // --gray-40 = mantine-color-gray-4
    "#949697", // --gray-50 = mantine-color-gray-5
    "#4a4f54", // --gray-60 = mantine-color-gray-6
    "#323639", // --gray-70 = mantine-color-gray-7
    "#292b2d", // --gray-80 = mantine-color-gray-8
    "#1f2123", // --gray-90 = mantine-color-gray-9
    "#131415", // --gray-95 = mantine-color-gray-10
  ],
  yleLogo: colorsTuple("#00b4c8"),
  blueBlack: colorsTuple("#131415"),
  darkBlue: colorsTuple("#1A2B4A"),
  /* Semantic colors: light theme */
  error: colorsTuple("#d72a56"),
  success: colorsTuple("#058657"),
  /* Semantic colors: dark theme */
  liveRed: colorsTuple("#e90e43"),
  greenBright: colorsTuple("#06b173"),
  /* Candidate colors */
  antBlue: colorsTuple("#1677ff"),
  mantineBlue: colorsTuple("#339af0"),
  chakraTeal: colorsTuple("#319795"),
  shadcnBlack: colorsTuple("#18181b"),
};

/* Themed colors */
export const colors: Partial<MantineThemeColors> = {
  ...baseColors,
  primaryBg: virtualColor({
    name: "primaryBg",
    dark: "blueBlack",
    light: "gray.1",
  }),
  textPrimary: virtualColor({
    name: "textPrimary",
    dark: "gray.0",
    light: "blueBlack",
  }),
  headingPrimary: virtualColor({
    name: "headingPrimary",
    dark: "gray.0", // TODO: Mantine, should be white
    light: "darkBlue",
  }),
  footerBg: virtualColor({
    name: "footer",
    dark: "gray.9",
    light: "gray.1",
  }),
  agree: virtualColor({
    name: "agree",
    dark: "greenBright",
    light: "success",
  }),
  disagree: virtualColor({
    name: "disagree",
    dark: "liveRed",
    light: "error",
  }),
  // focusOutline: virtualColor({}),
};
