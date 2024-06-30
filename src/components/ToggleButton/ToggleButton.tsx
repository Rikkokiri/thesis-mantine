import { Button, ButtonProps } from "@mantine/core";
import styles from "./ToggleButton.module.css";

interface IToggleButtonProps extends ButtonProps {
  onClick?: () => void;
  isToggled: boolean;
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
  variant?: ButtonProps["variant"];
  toggledVariant?: ButtonProps["variant"];
  toggledClassName?: string;
}

export const ToggleButton = ({
  isToggled,
  untoggledIcon,
  toggledIcon,
  variant = "outline",
  toggledVariant = "outline",
  className,
  ...rest
}: IToggleButtonProps) => {
  return (
    <Button
      leftSection={isToggled ? toggledIcon : untoggledIcon}
      className={`${isToggled && styles.toggled} ${className || ""}`}
      variant={isToggled ? toggledVariant : variant}
      {...rest}
    />
  );
};
