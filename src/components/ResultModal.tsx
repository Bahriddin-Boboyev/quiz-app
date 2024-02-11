import { mainDictionary } from '@/dictionary';
import { Box, Button, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import QuestionsStore from '@/store';
import DOMPurify from 'dompurify';

export const ResultModal = observer(() => {
  const { totalAnswer, totalCorrectAnswer, setResultModal, openDialog } = QuestionsStore;

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        width: '450px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '25px 30px',
      }}
    >
      <Box component="img" src="crown.svg" width={125} height={100} sx={{ mb: '20px' }} />

      <Typography sx={{ fontSize: '18px', fontWeight: '500', textAlign: 'center', lineHeight: '1.5' }}>
        {mainDictionary.resultText} <br />
        <Typography
          sx={{ fontSize: '18px', fontWeight: '500', textAlign: 'center', lineHeight: '1.5' }}
          component="span"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(mainDictionary.scoreResultTexts(totalCorrectAnswer, totalAnswer), {
              ALLOWED_TAGS: ['strong'],
            }),
          }}
        />
      </Typography>

      <Box sx={{ display: 'flex', my: '20px', columnGap: '20px' }}>
        <Button
          variant="contained"
          sx={{ fontWeight: '600' }}
          onClick={() => {
            openDialog(), setResultModal(false);
          }}
        >
          Replay Quiz
        </Button>
        <Button
          variant="outlined"
          sx={{ fontWeight: '600', transition: 'all 0.4s ease', '&:hover': { background: '#007bff', color: '#fff' } }}
          onClick={() => setResultModal(false)}
        >
          Quit Quiz
        </Button>
      </Box>
    </Box>
  );
});
