import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/index.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
