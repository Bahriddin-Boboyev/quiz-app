import { Box, Typography, Button } from '@mui/material';
import { mainDictionary } from '@/dictionary';
import { QuestionsItem } from './QuestionsItem';
import { observer } from 'mobx-react-lite';
import QuestionsStore from '@/store';

export const QuestionsModal = observer(() => {
  const { currentAnswer, questions, currentNumber, nextButton, userAnswer, totalAnswer } = QuestionsStore;

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        width: '550px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
        borderRadius: '5px',
      }}
    >
      <Box
        component="header"
        sx={{
          height: '70px',
          padding: '0 30px',
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          justifyContent: 'space-between',
          borderRadius: '5px 5px 0 0',
          boxShadow: '0px 3px 5px 1px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h3" fontSize="20px" fontWeight="600">
          {mainDictionary.modalTitle}
        </Typography>
        <Box
          sx={{
            color: '#004085',
            background: '#cce5ff',
            border: '1px solid #b8daff',
            width: '145px',
            height: '45px',
            padding: '0 8px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: '400', fontSize: '17px', userSelect: 'none' }}>
            {mainDictionary.timeLeft}
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              height: '30px',
              width: '45px',
              color: '#fff',
              borderRadius: '5px',
              lineHeight: '30px',
              textAlign: 'center',
              background: '#343a40',
              border: '1px solid #343a40',
              userSelect: 'none',
            }}
          >
            15
          </Typography>
        </Box>
      </Box>
      <Box component="main" sx={{ padding: '25px 30px 20px 30px' }}>
        <Typography
          sx={{ fontSize: '22px', fontWeight: '600' }}
          component="h3"
          dangerouslySetInnerHTML={{ __html: questions[currentNumber]?.question }}
        ></Typography>
        <Box component="ul" sx={{ padding: '20px 0' }}>
          {currentAnswer?.map((answer, index) => (
            <QuestionsItem key={index} answer={answer} />
          ))}
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          height: '60px',
          padding: '0 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid lightgrey',
        }}
      >
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
          sx={{
            height: '40px',
            padding: '0 13px',
            fontSize: '17px',
            fontWeight: '400',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onClick={() => nextButton()}
          disabled={userAnswer.length ? false : true || totalAnswer >= currentNumber}
        >
          Next Que
        </Button>
      </Box>
    </Box>
  );
});
