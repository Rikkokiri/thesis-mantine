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
        <Title order={1} size="h2" className="mb-16">
          {t("frontPage.title")}
        </Title>
        <Button iconAfter={<FiChevronRight />} onClick={startCompass}>
          {t("frontPage.start")}
        </Button>
      </div>
      <div className="page-sections__column py-24">
        <SectionCard title={t("candidates")}>
          <div></div>
        </SectionCard>
      </div>
    </>
  );
};
