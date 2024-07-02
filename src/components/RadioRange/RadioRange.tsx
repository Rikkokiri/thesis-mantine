import { Radio, Group } from "@mantine/core";
import classes from "./RadioRange.module.css";

interface RadioOption {
  value: number;
  label: string;
}

interface RadioRangeProps {
  options: RadioOption[];
  value: number | undefined;
  onChange: (value: string) => void;
  isReadonly?: boolean;
}

export const RadioRange = (props: RadioRangeProps) => (
  <Radio.Group className={classes.group} onChange={props.onChange}>
    <Group className={classes.radios}>
      {props.options.map((option) => (
        <Radio
          key={option.value}
          value={option.value.toString()}
          iconColor={option.value >= 3 ? "var(--agree)" : "var(--disagree)"}
          className={classes.radioRoot}
          label={option.label}
        />
      ))}
    </Group>
  </Radio.Group>
);
