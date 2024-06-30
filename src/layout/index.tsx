import { Group, GroupProps, Stack, StackProps } from "@mantine/core";

export const PageSectionsColumn = (props: StackProps) => {
  return <Stack gap="lg" w="100%" maw="680px" align="center" {...props} />;
};

export const RowCentered = (props: GroupProps) => {
  return <Group align="center" justify="center" w="100%" gap={0} {...props} />;
};
