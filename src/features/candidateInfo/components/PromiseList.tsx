import { Box, Flex } from "@mantine/core";
import styles from "../styles/PromiseList.module.css";

interface IPromiseListProps {
  items: string[];
}

export const PromiseList = (props: IPromiseListProps) => {
  const { items } = props;

  return (
    <ol className={styles.list}>
      {items.map((item: string, index: number) => (
        <Flex key={index} gap="1.5rem" pb="1rem">
          <Box className={styles.number}>{index + 1}</Box>
          <Box pb="5px">{item}</Box>
        </Flex>
      ))}
    </ol>
  );
};
