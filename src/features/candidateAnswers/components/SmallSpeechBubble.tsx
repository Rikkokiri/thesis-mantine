import { ReactNode } from "react";
import classes from "../styles/SmallSpeechBubble.module.css";
import { QuestionType } from "@data/types";
import { doesAgree } from "@data/data-utils";
import { Flex } from "@mantine/core";

interface ISpeechBubbleProps {
  content: ReactNode;
  answer: number;
  questionType: QuestionType;
  className?: string;
}

export const SmallSpeechBubble = (props: ISpeechBubbleProps) => {
  const agreeingAnswer = doesAgree(props.answer, props.questionType);

  return (
    <Flex
      bg={agreeingAnswer ? "var(--agree)" : "var(--disagree)"}
      className={`${classes.bubble} ${props.className || ""}`}
    >
      <div className={classes.arrow}></div>
      <div>{props.content}</div>
    </Flex>
  );
};
