import classes from "../styles/CandidateModal.module.css";
import { Button, Modal, ModalProps, Image, Text, Flex, Title, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MatchWithDetails } from "../types";

interface ICandidateModalProps extends ModalProps {
  candidate: MatchWithDetails;
}

export const CandidateModal = ({ opened, onClose, candidate }: ICandidateModalProps) => {
  const { t } = useTranslation();
  const { name, percentage, logoSrc, brandColor } = candidate;

  return (
    <Modal.Root opened={opened} onClose={onClose} centered classNames={classes}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header className={classes.header}>
          <Flex align="flex-start" w="100%">
            <Flex direction="column" justify="start" align="center">
              <Box h={85}>
                <Image src={logoSrc} aria-hidden className={classes.img} fit="contain" alt="" />
              </Box>
              <Box
                className={classes.graph}
                aria-hidden
                style={{ width: `${percentage}%`, backgroundColor: brandColor }}
              />
              <Text span className={classes.score}>{`${percentage}%`}</Text>
            </Flex>
            <Flex className={classes.details}>
              <Title size={18} lh="24px">
                {name}
              </Title>
              <Text span size="sm" fw={700} mt={10}>
                {t("candidate.number")} {candidate.number}
              </Text>
            </Flex>
          </Flex>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Flex className={classes.actions}>
            <Button
              component={Link}
              to={`/candidates/${candidate.id}`}
              variant="outline"
              size="xs"
              className={classes.link}
            >
              {t("candidate.getToKnow")}
            </Button>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
