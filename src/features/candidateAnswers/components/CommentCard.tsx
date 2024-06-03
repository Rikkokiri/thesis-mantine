import { ReactNode } from "react";
import "../styles/CommentCard.css";
import { QuestionType, YesNoAnswer } from "@data/types";

interface ICommentCardProps {
  header: ReactNode;
  body: ReactNode;
  answer?: number;
  questionType: QuestionType;
}

export const CommentCard = (props: ICommentCardProps) => {
  const { header, body, answer, questionType } = props;

  const arrowPosition = (answerVal: number | undefined, type: QuestionType) => {
    if (answerVal === undefined) return 50;
    if (type === QuestionType.YES_NO) {
      return answerVal === YesNoAnswer.YES ? 33 : 63;
    }
    return (answerVal < 4 ? answerVal - 1 : answerVal - 2) * 30 + 3;
  };

  return (
    <div className={`comment-card answer-${questionType === QuestionType.AGREE_SCALE && "scale"}`}>
      <div
        className="comment-card__arrow"
        style={{
          left: `${arrowPosition(answer, questionType)}%`,
          display: answer === undefined ? "none" : "inherit",
        }}
      />
      <div className="comment-card__header">{header}</div>
      <div className="comment-card__body">{body}</div>
    </div>
  );
};
