import { Flex, Text, useMantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { ToggleButton } from "../../../components/ToggleButton/ToggleButton";
import { FiEyeOff } from "react-icons/fi";
import { Tag } from "../../../components/Tag/Tag";
import { Category, Question } from "@data/types";
import { Answer } from "@stores/answerStore";
import { RadioQuestion } from "./RadioQuestion";
import { YesNoQuestion } from "./YesNoQuestion";
import { AdditionalInfo } from "./AdditionalInfo";
import { RowCentered } from "@/layout";

interface ICardProps {
  category: Category;
  question: Question;
  answer: Answer | undefined;
  questionsCount: number;
  answerQuestion: (questionId: number, answer: number) => void;
  toggleQuestionHiding: (questionId: number) => void;
}

export const QuestionCard = (props: ICardProps) => {
  const { answer, question, category, questionsCount, answerQuestion, toggleQuestionHiding } =
    props;
  const { t } = useTranslation();
  const questionId = question.id;
  const questionNumber = category.position + question.position + 1;
  const theme = useMantineTheme();

  return (
    <Flex
      component="section"
      className="card"
      direction="column"
      align="center"
      bg="var(--card-bg)"
      maw={theme.other.cardMaxWidth}
      w="100%"
      mb="1.5rem"
      py="5rem"
      px="1.5rem"
    >
      <RowCentered gap="lg">
        <Tag>{`${questionNumber}/${questionsCount}`}</Tag>
        <Text size="xs" fw="700">
          {category.name.en}
        </Text>
      </RowCentered>
      <Text size="xxl" fw="900" ta="center" className="question" maw="343px" my="1.25rem" mx={0}>
        {question.question.en}
      </Text>
      <RowCentered mt="6px" mb="1.125rem">
        {question.additionalInfo && <AdditionalInfo t={t} info={question.additionalInfo} />}
        <ToggleButton
          onClick={() => toggleQuestionHiding(question.id)}
          isToggled={!!answer?.hideQuestion}
          untoggledIcon={<FiEyeOff size={20} />}
          toggledIcon={<FiEyeOff size={20} />}
          variant="subtle"
          toggledVariant="subtle"
          size="xs" // TODO: Change to "xs" once ToggleButton uses Mantine's button
        >
          {t("question.hide")}
        </ToggleButton>
      </RowCentered>
      {question.questionType === "yes-no" ? (
        <YesNoQuestion
          answerQuestion={answerQuestion}
          questionId={questionId}
          t={t}
          answer={answer?.answer ?? null}
        />
      ) : (
        <RadioQuestion
          questionId={questionId}
          answerQuestion={answerQuestion}
          t={t}
          value={answer?.answer ?? null}
        />
      )}
    </Flex>
  );
};
