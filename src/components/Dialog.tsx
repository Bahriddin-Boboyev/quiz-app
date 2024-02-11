import { mainDictionary } from '@/dictionary';
import QuestionsStore from '@/store';
import { observer } from 'mobx-react-lite';
import DOMPurify from 'dompurify';
import { mainStyle } from '@/styles';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box } from '@mui/material';

export const DialogComponent = observer(() => {
  const { isDialog, closeDialog, setModal } = QuestionsStore;

  const handleClose = () => {
    closeDialog();
  };

  return (
    <>
      <Dialog
        open={isDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={mainStyle.dialogTitle}>
          {mainDictionary.dialogTitle}
        </DialogTitle>
        <hr />
        <DialogContent sx={mainStyle.dialogContent}>
          <Box component="ol" padding="15px">
            {mainDictionary.dialogRules.map((rule) => (
              <Box key={rule.id} component="li" margin="5px 0">
                <DialogContentText
                  id="alert-dialog-description"
                  sx={mainStyle.dialogContentText}
                  component="div"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rule.text, { ALLOWED_TAGS: ['strong'] }) }}
                ></DialogContentText>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" sx={mainStyle.dialogBtn}>
            Exit Quiz
          </Button>
          <Button
            onClick={() => {
              handleClose(), setModal(true);
            }}
            autoFocus
            variant="contained"
            sx={mainStyle.dialogBtn}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
