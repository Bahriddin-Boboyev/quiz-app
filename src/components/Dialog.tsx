import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  Typography,
} from '@mui/material';
import { mainDictionary } from '@/dictionary';

export const DialogComponent = ({ open, setState }: { open: boolean; setState: (value: boolean) => void }) => {
  const handleClose = () => {
    setState(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontSize: '20px', fontWeight: '600' }}>
          {mainDictionary.dialogTitle}
        </DialogTitle>
        <hr />
        <DialogContent sx={{ paddingY: '5px' }}>
          <Box component="ol" sx={{ padding: '15px' }}>
            {mainDictionary.dialogRules.map((rule) => (
              <Box key={rule.id} component="li" margin="5px 0">
                <DialogContentText id="alert-dialog-description" sx={{ color: '#000', fontSize: '17px' }}>
                  {rule.id === 1 ? (
                    <>
                      You will have only{' '}
                      <Typography component="strong" sx={{ color: '#007bff', fontWeight: 'bold' }}>
                        15 seconds
                      </Typography>{' '}
                      per each question.
                    </>
                  ) : (
                    rule.text
                  )}
                </DialogContentText>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" sx={{ fontWeight: '600' }}>
            Exit Quiz
          </Button>
          <Button onClick={handleClose} autoFocus variant="contained" sx={{ fontWeight: '600' }}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
