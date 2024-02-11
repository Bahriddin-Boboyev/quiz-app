import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Container, Button } from '@mui/material';
import { DialogComponent } from './components/Dialog';
import { QuestionsModal } from './components/QuestionsModal';
import { fetchQuestions } from './api/request';
import { Difficulty } from './types';
import QuestionsStore from './store';
import { Loading } from './components/Loading';
import { AxiosError } from 'axios';
import { Notification } from './components/Notification';
import { ResultModal } from './components/ResultModal';
import { questionCount } from '@/constants';

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
  }, [isModal]);

  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          <Button
            sx={{
              bgcolor: '#fff',
              fontFamily: 'Poppins',
              fontSize: '25px',
              padding: '15px 30px',
              fontWeight: '500',
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
            onClick={() => openDialog()}
          >
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
