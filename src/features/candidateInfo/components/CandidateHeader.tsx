import styles from "./CandidateHeader.module.css";
import { Box, Text, Title } from "@mantine/core";
import { useCandidateInfo } from "../hooks/useCandidateInfo";

export const CandidateIntroHeader = (props: ReturnType<typeof useCandidateInfo>) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <Box className={styles.header}>
      <Box>
        <Text size="sm" fw="700">
          {t("electionName")}
        </Text>
        <Title order={1} size="h1">
          {candidate.name}
        </Title>
      </Box>
      {candidate.organization ||
        (candidate.creator && (
          <Text size="xs" fw="700" className="candidate-header__organization">
            {t("candidate.createdBy")} {candidate.organization || candidate.creator}
          </Text>
        ))}
      <Box className={styles.number}>
        {t("candidate.number")} {candidate.number}
      </Box>
    </Box>
  );
};
