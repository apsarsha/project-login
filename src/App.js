import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LoginForm } from './components/auth/LoginForm';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <LoginForm />
    </LocalizationProvider>
  );
}

export default App;
