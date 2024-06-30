import { Badge, Button, Divider, MantineThemeComponents, Modal, Title } from "@mantine/core";
import badgeClasses from "./Badge.module.css";
import buttonClasses from "./Button.module.css";
import modalClasses from "./Modal.module.css";
import titleClasses from "./Title.module.css";

export const componentStyles: MantineThemeComponents = {
  Badge: Badge.extend({
    classNames: badgeClasses,
  }),
  Button: Button.extend({
    classNames: buttonClasses,
    defaultProps: {
      variant: "filled",
      size: "md",
    },
  }),
  Divider: Divider.extend({}),
  Modal: Modal.extend({ classNames: modalClasses }),
  Title: Title.extend({
    classNames: titleClasses,
  }),
};
