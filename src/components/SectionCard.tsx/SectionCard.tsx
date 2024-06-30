import { ReactNode } from "react";
import { Box, Paper, Title } from "@mantine/core";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  contentPadding?: number | string;
}

export const SectionCard = ({ contentPadding = 24, ...props }: SectionCardProps) => (
  <Paper w="100%" bg="var(--card-bg)">
    <Box p="21px 24px 16px" style={{ borderBottom: "var(--section-card-header-border)" }}>
      <Title order={2} size="h3">
        {props.title}
      </Title>
    </Box>
    <Box p={contentPadding}>{props.children}</Box>
  </Paper>
);
