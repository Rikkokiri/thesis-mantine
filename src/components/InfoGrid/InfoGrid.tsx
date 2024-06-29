import { ReactNode } from "react";
import classes from "./InfoGrid.module.css";
import { Box, BoxProps } from "@mantine/core";

export interface GridProps extends BoxProps {
  children: ReactNode;
}

export const InfoGrid = ({ className, ...rest }: GridProps) => (
  <Box component="ul" className={`${classes.grid} ${className ?? ""}`} {...rest} />
);

export const InfoGridRow = ({ className, ...rest }: GridProps) => (
  <Box component="li" className={`${classes.row} ${className ?? ""}`} {...rest} />
);

export const InfoGridItem = (props: GridProps) => <Box pb={5} {...props} />;
