import { GridProps, InfoGrid, InfoGridItem, InfoGridRow } from "@components/InfoGrid/InfoGrid";
import { Candidate } from "@data/candidates";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { TFunction } from "i18next";

interface IBackgroundDetailsProps {
  t: TFunction;
  candidate: Candidate;
}

const LabelItem = (props: GridProps) => <InfoGridItem fw={700} {...props} />;

export const BackgroundDetailsGrid = (props: IBackgroundDetailsProps) => {
  const { t, candidate } = props;
  const { localize } = useLocalizedString();

  return (
    <InfoGrid>
      <InfoGridRow>
        <LabelItem>{t("candidate.website")}</LabelItem>
        <InfoGridItem>
          <a href={candidate.website?.url} target="_blank" rel="noreferrer">
            {candidate.website?.text ? localize(candidate.website?.text) : candidate.website?.url}
          </a>
        </InfoGridItem>
      </InfoGridRow>
      <InfoGridRow>
        <LabelItem>Creator</LabelItem>
        <InfoGridItem>{candidate.creator}</InfoGridItem>
      </InfoGridRow>
      <InfoGridRow>
        <LabelItem>Github repository</LabelItem>
        <InfoGridItem>{candidate.github?.url || "-"}</InfoGridItem>
      </InfoGridRow>
    </InfoGrid>
  );
};
