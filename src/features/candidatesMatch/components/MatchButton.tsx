import classes from "../styles/MatchButton.module.css";
import { Image, UnstyledButton, Text, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MatchWithDetails } from "../types";
import { CandidateModal } from "./CandidateModal";

interface IMatchButtonProps {
  candidate: MatchWithDetails;
}

export const MatchButton = ({ candidate }: IMatchButtonProps) => {
  const { name, rank, percentage, logoSrc } = candidate;
  const ariaLabel = `top ${rank} - ${name} - ${percentage}% match`;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <UnstyledButton aria-label={ariaLabel} onClick={open} className={classes.button}>
        <Flex direction="column" justify="flex-start" align="center">
          <Image
            src={logoSrc}
            aria-hidden
            w={32}
            mih={43}
            className={classes.img}
            alt=""
            fit="contain"
          />

          <Text size="sm" fw="700" ta="center">
            {`${percentage}%`}
          </Text>
        </Flex>
      </UnstyledButton>
      <CandidateModal opened={opened} onClose={close} candidate={candidate} />
    </>
  );
};
