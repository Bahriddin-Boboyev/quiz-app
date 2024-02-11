import { Box, Typography, Button, Tooltip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { observer } from 'mobx-react-lite';
import QuestionsStore from '@/store';
import DOMPurify from 'dompurify';

type PropsType = {
  answer: string;
  timer: number;
};

export const QuestionsItem = observer(({ answer, timer }: PropsType) => {
  const { checkAnswer, isCorrectAnswer, userAnswer, questions, currentNumber } = QuestionsStore;

  const correctAnswer = !isCorrectAnswer && userAnswer.length && answer === questions[currentNumber]?.correct_answer;
  const correct = isCorrectAnswer && userAnswer.length && answer === userAnswer;
  const lostTime = timer == 0 && answer === questions[currentNumber]?.correct_answer;
  const inCorrect = !isCorrectAnswer && answer === userAnswer;

  return (
    <Box component="li">
      <Button
        sx={{
          color: inCorrect ? '#721c24' : correct || correctAnswer || lostTime ? '#155724' : 'initial',
          background: inCorrect ? '#f8d7da' : correct || correctAnswer || lostTime ? '#d4edda' : 'aliceblue',
          border: inCorrect
            ? '1px solid #f5c6cb'
            : correct || correctAnswer || lostTime
            ? '1px solid #c3e6cb'
            : '1px solid #84c5fe',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '5px',
          padding: '8px 15px',
          fontSize: '17px',
          mb: '15px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: '1',
          WebkitBoxOrient: 'vertical',

          pointerEvents: userAnswer.length || timer == 0 ? 'none' : 'initial',
          '&:hover': {
            color: '#004085',
            background: '#cce5ff',
          },
        }}
        onClick={() => checkAnswer(answer)}
      >
        <Tooltip title={answer}>
          <Typography
            component="span"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer, { USE_PROFILES: { html: true } }) }}
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
              textAlign: 'left',
            }}
          />
        </Tooltip>
        {correct || correctAnswer || lostTime ? (
          <CheckCircleOutlineIcon color="success" />
        ) : inCorrect ? (
          <CancelOutlinedIcon color="error" />
        ) : (
          ''
        )}
      </Button>
    </Box>
  );
});
