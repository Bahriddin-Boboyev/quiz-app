import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Container, Button } from '@mui/material';
import { DialogComponent } from './components/Dialog';
import { QuestionsModal } from './components/QuestionsModal';
import { fetchQuestions } from './api/request';
import { Difficulty } from './types';
import QuestionsStore from './store';

const App = observer(() => {
  const { openDialog, isModal } = QuestionsStore;

  const startHandleQuiz = () => {
    fetchQuestions(10, Difficulty.EASY);
  };

  useEffect(() => {
    if (isModal) {
      startHandleQuiz();
    }
  }, [isModal]);

  console.log(isModal);

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
              textTransform: 'initial',
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
        {isModal && <QuestionsModal />}
      </Container>
    </Box>
  );
});

export default App;
