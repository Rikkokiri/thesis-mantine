import { Button, MantineThemeComponents, Title } from "@mantine/core";
import buttonClasses from "./Button.module.css";
import titleClasses from "./Title.module.css";

export const componentStyles: MantineThemeComponents = {
  Button: Button.extend({
    classNames: buttonClasses,
  }),
  Title: Title.extend({
    classNames: titleClasses,
  }),
};
