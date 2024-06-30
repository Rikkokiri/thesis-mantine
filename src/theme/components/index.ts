import { Badge, Button, Divider, MantineThemeComponents, Modal, Radio, Title } from "@mantine/core";
import badgeClasses from "./Badge.module.css";
import buttonClasses from "./Button.module.css";
import dividerClasses from "./Divider.module.css";
import modalClasses from "./Modal.module.css";
import radioClasses from "./Radio.module.css";
import titleClasses from "./Title.module.css";

export const componentStyles: MantineThemeComponents = {
  Badge: Badge.extend({ classNames: badgeClasses }),
  Button: Button.extend({
    classNames: buttonClasses,
    defaultProps: {
      variant: "filled",
      size: "md",
    },
  }),
  Divider: Divider.extend({ classNames: dividerClasses }),
  Modal: Modal.extend({ classNames: modalClasses }),
  Radio: Radio.extend({ classNames: radioClasses }),
  Title: Title.extend({ classNames: titleClasses }),
};
