import { Backdrop, CircularProgress } from '@mui/material';

type PropsType = {
  open: boolean;
};

export const Loading = ({ open }: PropsType) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
