import { Theme } from '@mui/material';

export const mainStyle = {
  wrapperBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  starQuizBtn: {
    bgcolor: '#fff',
    fontFamily: 'Poppins',
    fontSize: '25px',
    padding: '15px 30px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: 'white',
    },
  },

  // DIALOG
  dialogTitle: { fontSize: '20px', fontWeight: '600' },
  dialogContent: { paddingY: '5px' },
  dialogContentText: { color: '#000', fontSize: '17px' },
  dialogBtn: { fontWeight: '600' },

  // LOADING
  loading: { color: '#fff', zIndex: (theme: Theme) => theme.zIndex.drawer + 1 },

  // RESULT MODAL

  resultModalBox: {
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
  },

  resultModalText: { fontSize: '18px', fontWeight: '500', textAlign: 'center', lineHeight: '1.5' },

  resultModalBtnBox: { display: 'flex', my: '20px', columnGap: '20px' },
  resultModalBtn: {
    fontWeight: '600',
  },
  resultModalBtnVariant2: {
    fontWeight: '600',
    transition: 'all 0.4s ease',
    '&:hover': { background: '#007bff', color: '#fff' },
  },

  // QUESTIONS MODAL

  questionModalBox: {
    bgcolor: '#fff',
    width: '550px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
    borderRadius: '5px',
  },

  questionModalHeaderBox: {
    height: '70px',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    justifyContent: 'space-between',
    borderRadius: '5px 5px 0 0',
    boxShadow: '0px 3px 5px 1px rgba(0,0,0,0.1)',
  },
  headerTimerBox: {
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
  },

  headerTimerText: { fontWeight: '400', fontSize: '17px', userSelect: 'none' },

  headerTimer: {
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
  },

  // Linear Progress

  linearProgress: {
    '& .MuiLinearProgress-bar': {
      transition: 'transform 0.2s ease-out',
    },
  },

  // MAIN

  mainBox: { padding: '25px 30px 20px 30px' },

  mainTitle: { fontSize: '22px', fontWeight: '600' },

  // FOOTER
  footerBox: {
    height: '60px',
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid lightgrey',
  },

  nextBtn: {
    height: '40px',
    padding: '0 13px',
    fontSize: '17px',
    fontWeight: '400',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  //  QUESTIONS ITEM

  correctStyle: {
    color: '#155724',
    background: '#d4edda',
    border: '1px solid #c3e6cb',
  },
  incorrectStyle: {
    color: '#721c24',
    background: '#f8d7da',
    border: '1px solid #f5c6cb',
  },

  defaultStyle: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '5px',
    padding: '8px 15px',
    fontSize: '17px',
    mb: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    background: 'aliceblue',
    border: '1px solid #84c5fe',
    '&:hover': {
      color: '#004085',
      background: '#cce5ff',
    },
  },

  questionsItemText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    textAlign: 'left',
  },
};
