import { Button, ButtonProps } from "@mantine/core";
import "./ToggleButton.css";

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
  toggledVariant = "subtle",
  className,
  toggledClassName = "toggled",
  ...rest
}: IToggleButtonProps) => {
  return (
    <Button
      leftSection={isToggled ? toggledIcon : untoggledIcon}
      className={`toggle-button ${isToggled ? toggledClassName : ""} ${className || ""}`}
      variant={isToggled ? toggledVariant : variant}
      {...rest}
    />
  );
};
