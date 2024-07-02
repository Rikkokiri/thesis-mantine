import { Radio, Group, Flex } from "@mantine/core";
import { QuestionType } from "@data/types";
import classes from "../styles/DisplayRadioRange.module.css";
import { useTranslation } from "react-i18next";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { CandidateIndicator } from "./CandidateIndicator";

interface IDisplayRadioOption {
  value: number;
  label: string;
  isChecked?: boolean;
  optionClassName?: string;
  indicatorClassName?: string;
  indicatorImgSrc?: string;
}

interface IDisplayRadioRangeProps {
  options: IDisplayRadioOption[];
  userAnswer: number | null;
  candidateAnswer: number | null;
  isReadonly?: boolean;
}

export const DisplayRadioRange = (props: IDisplayRadioRangeProps) => {
  const { t } = useTranslation();
  const { userAnswer, candidateAnswer } = props;

  return (
    <Group className={classes.group} mt={!userAnswer ? 0 : "70px"}>
      {props.options.map((option) => {
        return (
          <Flex className={classes.optionWrapper} key={`radio-option-${option.value}`}>
            <Radio
              value={option.value}
              label={option.label}
              checked={option.isChecked}
              readOnly
              iconColor={option.value >= 3 ? "var(--agree)" : "var(--disagree)"}
            />
            {option.isChecked && candidateAnswer === option.value && (
              <CandidateIndicator
                className={`${classes.indicator} ${option.indicatorClassName ?? ""}`}
                imgSrc={option.indicatorImgSrc ?? ""}
                style={{
                  clipPath:
                    userAnswer === option.value
                      ? "polygon(-1px -1px, 50% -1px, 50% 100%, -1px 100%)"
                      : "none",
                }}
              />
            )}
            {userAnswer === option.value && (
              <SmallSpeechBubble
                answer={userAnswer}
                questionType={QuestionType.AGREE_SCALE}
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 10px)",
                  textAlign: "center",
                }}
              >
                {t("question.yourAnswer")}
              </SmallSpeechBubble>
            )}
          </Flex>
        );
      })}
    </Group>
  );
};
