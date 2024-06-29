import classes from "../styles/CandidatesMatchBar.module.css";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { MatchButton } from "./MatchButton";
import { useCandidatesMatch } from "../hooks/useCandidatesMatch";
import { MatchWithDetails } from "../types";
import { ActionIcon, Box, Flex } from "@mantine/core";

export const CandidatesMatchBar = (props: ReturnType<typeof useCandidatesMatch>) => {
  const { topFourCandidates, topCount, displayMatches } = props;
  const [resultsHidden, setResultsHidden] = useState<boolean>(false);

  if (!displayMatches) {
    return null;
  }

  return (
    <Flex component="header" className={classes.bar}>
      <Flex align="center" maw={520} w="100%">
        <Flex className={classes.matches}>
          {resultsHidden || !topFourCandidates
            ? [...Array(topCount).keys()].map((index) => <MatchPlaceholder key={index} />)
            : topFourCandidates.map((candidate: MatchWithDetails) => (
                <MatchButton candidate={candidate} key={candidate.id} />
              ))}
        </Flex>
        <ActionIcon
          onClick={() => setResultsHidden(!resultsHidden)}
          variant="transparent"
          size="lg"
          // iconSize={24}
          // className="match-bar__toggle"
          // toggledClassName="toggled-transparent"
        >
          {resultsHidden ? <FiEyeOff size={24} /> : <FiEye size={24} />}
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

const MatchPlaceholder = () => (
  <Flex direction="column" justify="space-between" h="100%" w="2rem">
    <Box className={classes.placeholder} h={34} />
    <Box className={classes.placeholder} h={18} />
  </Flex>
);
