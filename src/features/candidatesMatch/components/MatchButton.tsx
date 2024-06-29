import "../styles/MatchButton.css";
import "../styles/CandidateModal.css";
import { Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MatchWithDetails } from "../types";

interface IMatchButtonProps {
  candidate: MatchWithDetails;
}

export const MatchButton = ({ candidate }: IMatchButtonProps) => {
  const { name, rank, percentage, logoSrc, brandColor } = candidate;
  const ariaLabel = `top ${rank} - ${name} - ${percentage}% match`;
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation();

  return (
    <>
      <button type="button" aria-label={ariaLabel} className="match-result" onClick={open}>
        <div className="match-result__img-wrapper">
          <img src={logoSrc} aria-hidden className="match-result__img" alt="" />
          <Text
            size="sm"
            fw="700"
            ta="center"
            // TODO: Remove once color fixed - className="match-result__score"
          >
            {`${percentage}%`}
          </Text>
        </div>
      </button>
      <Modal opened={opened} onClose={close} centered>
        <div className="candidate-modal__body">
          <div className="candidate-modal__img-wrapper">
            <img src={logoSrc} aria-hidden className="candidate-modal__img" alt="" />
            <div
              className="candidate-modal__score-visual"
              aria-hidden
              style={{ width: `${percentage}%`, backgroundColor: brandColor }}
            />
            <span className="candidate-modal__score">{`${percentage}%`}</span>
          </div>
          <div className="candidate-modal__details-section">
            <h3 className="candidate-modal__name">{name}</h3>
            <span className="candidate-modal__number body-small">
              {t("candidate.number")} {candidate.number}
            </span>
          </div>
        </div>
        <div className="candidate-modal__actions">
          <Button component={Link} to={`/candidates/${candidate.id}`} variant="outline" size="xs">
            {t("candidate.getToKnow")}
          </Button>
        </div>
      </Modal>
    </>
  );
};
