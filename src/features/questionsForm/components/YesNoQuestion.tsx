import { TFunction } from "i18next";
import { RiThumbUpLine, RiThumbUpFill, RiThumbDownLine, RiThumbDownFill } from "react-icons/ri";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { YesNoAnswer } from "@data/types";
import { RowCentered } from "@/layout";

interface IYesNoQuestionProps {
  t: TFunction;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
  answer: number | null;
}

export const YesNoQuestion = (props: IYesNoQuestionProps) => {
  const { answer, answerQuestion, questionId, t } = props;

  return (
    <RowCentered gap="lg" mt="2.5rem">
      <ToggleButton
        isToggled={answer === YesNoAnswer.YES}
        onClick={() => answerQuestion(questionId, YesNoAnswer.YES)}
        untoggledIcon={<RiThumbUpLine size={20} />}
        toggledIcon={<RiThumbUpFill size={20} />}
        size="md"
        variant="outline"
        toggledVariant="outline"
      >
        {t("question.yes")}
      </ToggleButton>
      <ToggleButton
        isToggled={answer === YesNoAnswer.NO}
        onClick={() => answerQuestion(questionId, YesNoAnswer.NO)}
        untoggledIcon={<RiThumbDownLine size={20} />}
        toggledIcon={<RiThumbDownFill size={20} />}
        size="md"
        variant="outline"
        toggledVariant="outline"
      >
        {t("question.no")}
      </ToggleButton>
    </RowCentered>
  );
};
