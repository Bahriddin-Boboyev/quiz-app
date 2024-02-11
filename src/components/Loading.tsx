import { Backdrop, CircularProgress } from '@mui/material';
import { mainStyle } from '@/styles';

type PropsType = {
  open: boolean;
};

export const Loading = ({ open }: PropsType) => {
  return (
    <Backdrop sx={mainStyle.loading} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
