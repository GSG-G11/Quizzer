import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { AlertColor } from '@mui/material';
import { SnackBarContext } from '../../Hooks';
import { Alert, Snackbar } from '../../mui';

function SnackBarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [typeColor, setTypeColor] = useState<AlertColor>('info');

  const showSnackBar = (text: string, color: AlertColor) => {
    setMessage(text);
    setTypeColor(color);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTypeColor('info');
  };

  const memoizedSnackBar = useMemo(() => ({ showSnackBar }), []);

  return (
    <SnackBarContext.Provider value={memoizedSnackBar}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={typeColor}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;
