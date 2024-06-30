import { TFunction } from "i18next";
import { RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";
import { Flex } from "@mantine/core";
import classes from "../styles/YesOrNoAnswer.module.css";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { YesNoAnswer, QuestionType } from "@data/types";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { CandidateIndicator } from "./CandidateIndicator";

interface IYesNoAnswerProps {
  t: TFunction;
  questionId: number;
  candidateAnswer: number | null;
  userAnswer: number | null;
  candidateImgSrc: string;
}

type AnswerOption = {
  value: YesNoAnswer;
  label: string;
};

export const YesOrNoAnswer = (props: IYesNoAnswerProps) => {
  const { t, userAnswer, candidateAnswer, candidateImgSrc } = props;
  const options: AnswerOption[] = [
    {
      value: YesNoAnswer.YES,
      label: t("question.yes"),
    },
    {
      value: YesNoAnswer.NO,
      label: t("question.no"),
    },
  ];

  return (
    <Flex className={classes.container}>
      {options.map((option) => {
        const isToggled = candidateAnswer === option.value;

        return (
          <Flex key={option.value} direction="column" align="center">
            <ToggleButton
              disabled
              variant="outline"
              toggledVariant="outline"
              isToggled={isToggled}
              toggledIcon={
                <CandidateIndicator
                  alt="" // TODO: Pass a meaningful alt text
                  imgSrc={candidateImgSrc}
                />
              }
              mt={8}
              size="md"
              untoggledIcon={
                option.value === YesNoAnswer.YES ? (
                  <RiThumbUpLine size={20} />
                ) : (
                  <RiThumbDownLine size={20} />
                )
              }
            >
              {option.label}
            </ToggleButton>
            {userAnswer === option.value && (
              <SmallSpeechBubble
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.YES_NO}
                className={classes["user-answer"]}
              />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};
