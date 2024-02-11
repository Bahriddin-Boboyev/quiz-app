import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { AnswerStateProps } from '@/types';

export const answerState = ({
  answer,
  timer,
  isCorrectAnswer,
  userAnswer,
  questions,
  currentNumber,
}: AnswerStateProps) => {
  if (!isCorrectAnswer && userAnswer.length && answer === questions[currentNumber]?.correct_answer) {
    return { icon: <CheckCircleOutlineIcon color="success" />, style: 'correctStyle' };
  }
  if (isCorrectAnswer && userAnswer.length && answer === userAnswer) {
    return { icon: <CheckCircleOutlineIcon color="success" />, style: 'correctStyle' };
  }
  if (timer == 0 && answer === questions[currentNumber]?.correct_answer) {
    return { icon: <CheckCircleOutlineIcon color="success" />, style: 'correctStyle' };
  }
  if (!isCorrectAnswer && answer === userAnswer) {
    return { icon: <CancelOutlinedIcon color="error" />, style: 'incorrectStyle' };
  }

  return { icon: null, style: 'defaultStyle' };
};
