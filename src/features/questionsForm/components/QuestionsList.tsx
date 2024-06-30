import { Question } from "src/data/types";
import { QuestionCard } from "./QuestionCard";
import { IQuestionsForm } from "../hooks/useQuestionsForm";
import { Box, Stack } from "@mantine/core";

export const QuestionsList = (props: IQuestionsForm) => {
  const { categoriesAndQuestions, questionsTotalCount, answers } = props;

  return (
    <Box component="section" w="100%">
      {categoriesAndQuestions.map((category) => (
        <Stack component="article" key={category.id} align="center" gap="lg" mb="lg">
          {category.questions.map((question: Question) => (
            <QuestionCard
              key={question.id}
              category={category}
              question={question}
              answer={answers[question.id]}
              questionsCount={questionsTotalCount}
              answerQuestion={props.answerQuestion}
              toggleQuestionHiding={props.toggleQuestionHiding}
            />
          ))}
        </Stack>
      ))}
    </Box>
  );
};
