import "../styles/CandidateHeader.css";
import { Text, Title } from "@mantine/core";
import { useCandidateInfo } from "../hooks/useCandidateInfo";

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <div className="candidate-header">
      <div>
        <Text size="sm" fw="700">
          {t("electionName")}
        </Text>
        <Title order={1} size="h1">
          {candidate.name}
        </Title>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <Text size="xs" fw="700" className="candidate-header__organization">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </Text>
        ))}
      <div className="candidate-number">
        {t("candidate.number")} {candidate.number}
      </div>
    </div>
  );
};
