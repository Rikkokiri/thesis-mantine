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
  toggledClassName = "toggled", // This is a class name that is added when the button is toggled. Changing it removes default toggle style
  className,
  ...rest
}: IToggleButtonProps) => {
  const toggleStyles = isToggled ? styles[toggledClassName] : "";

  return (
    <Button
      leftSection={isToggled ? toggledIcon : untoggledIcon}
      className={`${toggleStyles} ${className || ""}`}
      variant={isToggled ? toggledVariant : variant}
      {...rest}
    />
  );
};
