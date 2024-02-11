import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Container, Button } from '@mui/material';
import { fetchQuestions } from './api';
import { Difficulty } from './types';
import QuestionsStore from './store';
import { AxiosError } from 'axios';
import { mainStyle } from '@/styles';
import { questionCount } from '@/constants';
import { DialogComponent, Loading, Notification, QuestionsModal, ResultModal } from './components';

const App = observer(() => {
  const {
    openDialog,
    isModal,
    isLoading,
    setQuestion,
    setLoading,
    setNotification,
    setOpenNotification,
    isResultModal,
  } = QuestionsStore;

  const startHandleQuiz = async () => {
    setLoading(true);
    try {
      const result = await fetchQuestions(questionCount, Difficulty.EASY);
      setQuestion(result);
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) {
        console.log(error);
        setNotification(error.message);
        setOpenNotification(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isModal) {
      startHandleQuiz();
    }
    // eslint-disable-next-line
  }, [isModal]);

  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={mainStyle.wrapperBox}>
          <Button sx={mainStyle.starQuizBtn} onClick={() => openDialog()}>
            Start Quiz
          </Button>
        </Box>

        <DialogComponent />
        {!isLoading && isModal && <QuestionsModal />}
        {isResultModal && <ResultModal />}
        <Loading open={isLoading} />
        <Notification />
      </Container>
    </Box>
  );
});

export default App;
