import { useEffect } from 'react';
import { Box, Typography, Button, LinearProgress } from '@mui/material';
import { mainDictionary } from '@/dictionary';
import { observer } from 'mobx-react-lite';
import DOMPurify from 'dompurify';
import { mainStyle } from '@/styles';
import { useProgress, useTimer } from '@/hooks';
import { QuestionsItem } from './QuestionsItem';
import QuestionsStore from '@/store';

export const QuestionsModal = observer(() => {
  const { currentAnswer, questions, currentNumber, nextButton, userAnswer, totalAnswer } = QuestionsStore;
  const { progress, linerTimer, resetProgress } = useProgress();
  const { timer, startTimer, resetTimer } = useTimer(15);

  useEffect(() => {
    if (progress >= 100 || userAnswer.length) {
      clearInterval(linerTimer.current);
    }
    // eslint-disable-next-line
  }, [progress]);

  useEffect(() => {
    if (timer <= 0 || userAnswer.length) {
      clearInterval(startTimer.current);
    }
    // eslint-disable-next-line
  }, [timer]);

  const handleNextBtn = () => {
    nextButton();
    resetTimer();
    resetProgress();
  };

  return (
    <Box sx={mainStyle.questionModalBox}>
      <Box component="header" sx={mainStyle.questionModalHeaderBox}>
        <Typography variant="h3" sx={mainStyle.headerTitle}>
          {mainDictionary.modalTitle}
        </Typography>
        <Box sx={mainStyle.headerTimerBox}>
          <Typography sx={mainStyle.headerTimerText}>{mainDictionary[timer > 0 ? 'timeLeft' : 'timeOff']}</Typography>
          <Typography sx={mainStyle.headerTimer}>{timer}</Typography>
        </Box>
      </Box>

      <Box width="100%">
        <LinearProgress
          variant="determinate"
          value={progress}
          color={progress > 80 && progress < 100 ? 'warning' : progress >= 100 ? 'error' : 'primary'}
          sx={mainStyle.linearProgress}
        />
      </Box>

      <Box component="main" sx={mainStyle.mainBox}>
        <Typography
          sx={mainStyle.mainTitle}
          component="h3"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(questions[currentNumber]?.question, { USE_PROFILES: { html: true } }),
          }}
        ></Typography>
        <Box component="ul" padding="20px 0">
          {currentAnswer?.map((answer, index) => (
            <QuestionsItem key={index} answer={answer} timer={timer} />
          ))}
        </Box>
      </Box>
      <Box component="footer" sx={mainStyle.footerBox}>
        <Box>
          <Typography component="p">
            <Typography component="span" fontWeight="500">
              {currentNumber + 1}
            </Typography>
            &nbsp; of&nbsp;
            <Typography component="span" fontWeight="500">
              {totalAnswer}
            </Typography>
            &nbsp; Questions
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={mainStyle.nextBtn}
          onClick={handleNextBtn}
          disabled={timer !== 0 && (userAnswer.length ? false : true || totalAnswer >= currentNumber)}
        >
          Next Que
        </Button>
      </Box>
    </Box>
  );
});
