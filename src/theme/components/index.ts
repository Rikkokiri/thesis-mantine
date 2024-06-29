import { Button, MantineThemeComponents, Modal, Title } from "@mantine/core";
import buttonClasses from "./Button.module.css";
import modalClasses from "./Modal.module.css";
import titleClasses from "./Title.module.css";

export const componentStyles: MantineThemeComponents = {
  Button: Button.extend({
    classNames: buttonClasses,
  }),
  Modal: Modal.extend({ classNames: modalClasses }),
  Title: Title.extend({
    classNames: titleClasses,
  }),
};
