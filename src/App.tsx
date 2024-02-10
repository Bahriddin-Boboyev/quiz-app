// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useState } from 'react';
import { Box, Container, Button } from '@mui/material';
import { DialogComponent } from './components/Dialog';
import { QuestionsModal } from './components/QuestionsModal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            onClick={() => setIsOpen(true)}
          >
            Start Quiz
          </Button>
        </Box>

        <DialogComponent open={isOpen} setState={setIsOpen} />
        <QuestionsModal />
      </Container>
    </Box>
  );
};

export default App;
