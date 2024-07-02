import classes from "../styles/SmallSpeechBubble.module.css";
import { QuestionType } from "@data/types";
import { doesAgree } from "@data/data-utils";
import { Flex, FlexProps } from "@mantine/core";

interface ISpeechBubbleProps extends FlexProps {
  answer: number;
  questionType: QuestionType;
}

export const SmallSpeechBubble = (props: ISpeechBubbleProps) => {
  const agreeingAnswer = doesAgree(props.answer, props.questionType);

  return (
    <Flex
      bg={agreeingAnswer ? "var(--agree)" : "var(--disagree)"}
      className={classes.bubble}
      {...props}
    >
      <div className={classes.arrow}></div>
      <div>{props.children}</div>
    </Flex>
  );
};
