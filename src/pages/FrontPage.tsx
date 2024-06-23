import { PageSectionsColumn } from "@/layout";
import { Box, Button } from "@mantine/core";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { Title } from "@mantine/core";
import { useAnswerStore } from "@stores/answerStore";
import { useTranslation } from "react-i18next";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Route } from "src/routes";

export const FrontPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { removeAllAnswers } = useAnswerStore();

  const startCompass = () => {
    removeAllAnswers();
    navigate(Route.QUESTIONS);
  };

  return (
    <>
      <Box p={24} bg="primaryBg" style={{ textAlign: "center" }}>
        <Title order={1} size="h2" mb="md">
          {t("frontPage.title")}
        </Title>
        <Button leftSection={<FiChevronRight />} onClick={startCompass}>
          {t("frontPage.start")}
        </Button>
      </Box>
      <PageSectionsColumn my="xl">
        <SectionCard title={t("candidates")}>
          <div></div>
        </SectionCard>
      </PageSectionsColumn>
    </>
  );
};
