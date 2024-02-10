import { Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export const QuestionsItem = () => {
  return (
    <Box
      component="li"
      sx={{
        background: 'aliceblue',
        border: '1px solid #84c5fe',
        borderRadius: '5px',
        padding: '8px 15px',
        fontSize: '17px',
        mb: '15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: '#004085',
          background: '#cce5ff',
          border: '1px solid #b8daff',
        },
      }}
    >
      <Typography>Hyper Text Preprocessor</Typography> <CheckCircleOutlineIcon color="success" />
    </Box>
  );
};
