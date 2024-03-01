
import './App.css';
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

import { MuiResponsiveness } from './components/MuiResponsiveness';

function App() {
  return (
   <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='App'>
        < MuiResponsiveness />
      </div>
    </LocalizationProvider>
  );
}

export default App;