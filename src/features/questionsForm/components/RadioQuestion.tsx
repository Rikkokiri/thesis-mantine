import { RowCentered } from "@/layout";
import { RadioRange } from "@components/RadioRange/RadioRange";
import { TFunction } from "i18next";

interface IRadioQuestionProps {
  t: TFunction;
  value: number | null;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
}

export const RadioQuestion = (props: IRadioQuestionProps) => {
  const { t, value, questionId, answerQuestion } = props;

  return (
    <RowCentered pt="sm">
      <RadioRange
        options={[
          {
            value: 1,
            label: t("answerScale.strongDisagree"),
          },
          {
            value: 2,
            label: t("answerScale.disagree"),
          },
          { value: 4, label: t("answerScale.agree") },
          {
            value: 5,
            label: t("answerScale.strongAgree"),
          },
        ]}
        value={value ?? undefined}
        onChange={(value) => answerQuestion(questionId, parseInt(value, 10))}
      />
    </RowCentered>
  );
};
