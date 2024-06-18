import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Text, Title } from "@mantine/core";
import "./QuestionsPage.css";
import { FiArrowDown } from "react-icons/fi";
import { CandidatesMatch } from "src/features/candidatesMatch";
import { getQuestionsTotalCount } from "@data/api";
import { useRef } from "react";
import { QuestionForm } from "../features/questionsForm";
import { Button } from "../components/Button/Button";

export const QuestionsPage = () => {
  const { t } = useTranslation();
  const questionsTotalCount = getQuestionsTotalCount();
  const { ref, inView } = useInView({
    threshold: (1 / questionsTotalCount) * 1.5, // Reveal when half of second card is in view
  });
  const questionsStartRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {inView && <CandidatesMatch />}
      <section className="question-page__header">
        {/* TODO: color: var(--heading-primary); */}
        <Text size="sm" fw="700">
          {t("electionName")}
        </Text>
        <Title order={1} size="h2">
          {t("questionPage.findYourCandidate")}
        </Title>
        <Text size="md" className="page-intro">
          {t("questionPage.description")}
        </Text>

        <Button
          iconBefore={<FiArrowDown />}
          onClick={() => {
            questionsStartRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {t("questionPage.findYourCandidate")}
        </Button>
        <div ref={questionsStartRef} />
      </section>
      <div className="question-page__content" ref={ref}>
        <QuestionForm />
      </div>
    </>
  );
};
