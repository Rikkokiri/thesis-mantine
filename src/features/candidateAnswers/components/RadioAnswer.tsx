import { TFunction } from "i18next";
import { DisplayRadioRange } from "./DisplayRadioRange";
import { RowCentered } from "@/layout";

interface IRadioAnswerProps {
  t: TFunction;
  candidateAnswer: number | null;
  userAnswer: number | null;
  candidateImgSrc: string;
}

export const RadioAnswer = (props: IRadioAnswerProps) => {
  const { t, candidateAnswer, userAnswer, candidateImgSrc } = props;

  return (
    <RowCentered pt="sm">
      <DisplayRadioRange
        options={buildOptions(t, candidateAnswer, userAnswer, candidateImgSrc)}
        candidateAnswer={candidateAnswer}
        userAnswer={userAnswer}
        isReadonly
      />
    </RowCentered>
  );
};

const buildOptions = (
  t: TFunction,
  candidateAnswer: number | null,
  userAnswer: number | null,
  candidateImgSrc: string
) => {
  const options = [
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
  ];

  return options.map((option) => {
    const isCandidateAnswer = candidateAnswer === option.value;
    const isUserAnswer = userAnswer === option.value;

    return {
      ...option,
      isChecked: isUserAnswer || isCandidateAnswer,
      indicatorClassName: `${isCandidateAnswer ? "candidate-answer" : ""} ${isUserAnswer ? "user-answer" : ""}`,
      indicatorImgSrc: isCandidateAnswer ? candidateImgSrc : undefined,
    };
  });
};
