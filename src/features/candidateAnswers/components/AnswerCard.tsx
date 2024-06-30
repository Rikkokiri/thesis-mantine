import "../styles/AnswerCard.css";
import { Badge, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Question } from "@data/types";
import { CandidateAnswer } from "@data/candidateAnswers";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { getAnswerByQuestionId } from "@stores/answerStore";
import { RadioAnswer } from "./RadioAnswer";
import { YesOrNoAnswer } from "./YesOrNoAnswer";
import { CommentCard } from "./CommentCard";
import { RowCentered } from "@/layout";

interface ICardProps {
  question: Question;
  candidateAnswer: CandidateAnswer;
  questionsCount: number;
  candidateImgSrc: string;
}

export const AnswerCard = (props: ICardProps) => {
  const { candidateAnswer, question, questionsCount } = props;
  const { t } = useTranslation();
  const { localize } = useLocalizedString();
  const questionId = question.id;

  const candidateComment = candidateAnswer?.comment ? localize(candidateAnswer.comment) : undefined;

  const userAnswer = getAnswerByQuestionId(question.id);

  return (
    <section className="answer-card">
      <RowCentered gap="lg">
        <Badge variant="light">{`${question.position}/${questionsCount}`}</Badge>
      </RowCentered>
      <Text size="xxl" fw="900" ta="center" className="question">
        {question.question.en}
      </Text>
      {question.questionType === "yes-no" ? (
        <YesOrNoAnswer
          questionId={questionId}
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={props.candidateImgSrc}
        />
      ) : (
        <RadioAnswer
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={props.candidateImgSrc}
        />
      )}
      {candidateComment && (
        <CommentCard
          header="Candidate name" // TODO: Pass candidate's name
          body={candidateComment}
          questionType={question.questionType}
          answer={candidateAnswer?.answer}
        />
      )}
    </section>
  );
};
