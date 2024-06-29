import "../styles/AnswerList.css";
import { useState } from "react";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AnswerCard } from "./AnswerCard";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { RowCentered } from "@/layout";
import { Box, Divider } from "@mantine/core";

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, candidateAnswers, candidateImgSrc } = props;
  const [isExpanded, setExpanded] = useState(false);
  const questionsToShow = isExpanded ? questions : [questions[0]];

  return (
    <Box component="article" w="100%" className="answer-list">
      <SectionCard title={t("candidateSections.answers")}>
        <>
          {questionsToShow.map((question) => (
            <AnswerCard
              key={question.id}
              question={question}
              candidateAnswer={candidateAnswers[question.id] ?? { answer: null }}
              questionsCount={questions.length}
              candidateImgSrc={candidateImgSrc}
            />
          ))}
        </>
        <Divider my={0} mx="lg" />
        <RowCentered p="lg">
          <ToggleButton
            isToggled={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
            toggledIcon={<FiMinus size={24} />}
            untoggledIcon={<FiPlus size={24} />}
            size="md"
            variant="outline"
            toggledVariant="outline"
            className="answer-list__expand-button"
          >
            {isExpanded ? t("showFewer") : t("showMore")}
          </ToggleButton>
        </RowCentered>
      </SectionCard>
    </Box>
  );
};
