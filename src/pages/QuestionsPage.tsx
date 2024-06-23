import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Flex, Stack, Text, Title } from "@mantine/core";
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
      <Stack
        component="section"
        align="center"
        py="2rem"
        style={{ textAlign: "center" }}
        bg="primaryBg"
      >
        {/* TODO: color: var(--heading-primary); */}
        <Text size="sm" fw="700">
          {t("electionName")}
        </Text>
        <Title order={1} size="h2">
          {t("questionPage.findYourCandidate")}
        </Title>
        <Text size="md" m="1rem" mb="2rem" maw="680px">
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
      </Stack>
      <Flex ref={ref} w="100%" direction="column" pt="1.5rem" align="center">
        <QuestionForm />
      </Flex>
    </>
  );
};
