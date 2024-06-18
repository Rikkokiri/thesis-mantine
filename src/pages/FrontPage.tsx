import { PageSectionsColumn } from "@/layout";
import { Button } from "@components/Button/Button";
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
      <div className="page-header">
        <Title order={1} size="h2" mb="md">
          {t("frontPage.title")}
        </Title>
        <Button iconAfter={<FiChevronRight />} onClick={startCompass}>
          {t("frontPage.start")}
        </Button>
      </div>
      <PageSectionsColumn my="xl">
        <SectionCard title={t("candidates")}>
          <div></div>
        </SectionCard>
      </PageSectionsColumn>
    </>
  );
};
