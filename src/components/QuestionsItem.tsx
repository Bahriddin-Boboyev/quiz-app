import { Box, Typography, Button, Tooltip } from '@mui/material';
import { observer } from 'mobx-react-lite';
import QuestionsStore from '@/store';
import DOMPurify from 'dompurify';
import { mainStyle } from '@/styles';
import { answerState } from '@/utils';
import { AnswerStateStyle } from '@/types';

type PropsType = {
  answer: string;
  timer: number;
};

export const QuestionsItem = observer(({ answer, timer }: PropsType) => {
  const { checkAnswer, isCorrectAnswer, userAnswer, questions, currentNumber } = QuestionsStore;

  const { icon, style } = answerState({ answer, timer, isCorrectAnswer, userAnswer, questions, currentNumber });

  return (
    <Box component="li">
      <Button
        sx={{
          ...mainStyle.defaultStyle,
          ...mainStyle[style as AnswerStateStyle],
          pointerEvents: userAnswer.length || timer == 0 ? 'none' : 'initial',
        }}
        onClick={() => checkAnswer(answer)}
      >
        <Tooltip title={answer}>
          <Typography
            component="span"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer, { USE_PROFILES: { html: true } }) }}
            sx={mainStyle.questionsItemText}
          />
        </Tooltip>
        {icon}
      </Button>
    </Box>
  );
});
