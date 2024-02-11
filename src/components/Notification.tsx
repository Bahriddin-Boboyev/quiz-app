import { Snackbar } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import { observer } from 'mobx-react-lite';
import QuestionsStore from '@/store';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export const Notification = observer(() => {
  const { isOpenNotification, notificationMsg, restNotification } = QuestionsStore;

  return (
    <Snackbar
      open={isOpenNotification}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={5000}
      message={notificationMsg}
      TransitionComponent={SlideTransition}
      onClose={() => restNotification()}
    />
  );
});
