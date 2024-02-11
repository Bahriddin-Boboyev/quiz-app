import { mainDictionary } from '@/dictionary';
import { Box, Button, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import QuestionsStore from '@/store';
import DOMPurify from 'dompurify';
import { mainStyle } from '@/styles';

export const ResultModal = observer(() => {
  const { totalAnswer, totalCorrectAnswer, setResultModal, openDialog } = QuestionsStore;

  return (
    <Box sx={mainStyle.resultModalBox}>
      <Box component="img" src="crown.svg" width={125} height={100} mb="20px" />

      <Typography sx={mainStyle.resultModalText}>
        {mainDictionary.resultText} <br />
        <Typography
          sx={mainStyle.resultModalText}
          component="span"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(mainDictionary.scoreResultTexts(totalCorrectAnswer, totalAnswer), {
              ALLOWED_TAGS: ['strong'],
            }),
          }}
        />
      </Typography>

      <Box sx={mainStyle.resultModalBtnBox}>
        <Button
          variant="contained"
          sx={mainStyle.resultModalBtn}
          onClick={() => {
            openDialog(), setResultModal(false);
          }}
        >
          Replay Quiz
        </Button>
        <Button variant="outlined" sx={mainStyle.resultModalBtnVariant2} onClick={() => setResultModal(false)}>
          Quit Quiz
        </Button>
      </Box>
    </Box>
  );
});
