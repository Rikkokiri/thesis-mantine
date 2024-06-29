import { ReactNode } from "react";
import { Flex } from "@mantine/core";
import classes from "../styles/CommentCard.module.css";
import { QuestionType, YesNoAnswer } from "@data/types";

interface ICommentCardProps {
  header: ReactNode;
  body: ReactNode;
  answer?: number;
  questionType: QuestionType;
}

export const CommentCard = (props: ICommentCardProps) => {
  const { header, body, answer, questionType } = props;

  const arrowPosition = (answer: number | undefined, questionType: QuestionType) => {
    if (answer === undefined) return 50;
    if (questionType === QuestionType.YES_NO) {
      return answer === YesNoAnswer.YES ? 33 : 63;
    }
    return (answer < 4 ? answer - 1 : answer - 2) * 30 + 3;
  };

  return (
    <Flex
      direction="column"
      className={classes.card}
      mt={questionType === QuestionType.AGREE_SCALE ? "1.75rem" : "0.75rem"}
    >
      <div
        className={classes.arrow}
        style={{
          left: `${arrowPosition(answer, questionType)}%`,
          display: answer === undefined ? "none" : "inherit",
        }}
      />
      <div className={classes.header}>{header}</div>
      <div>{body}</div>
    </Flex>
  );
};
