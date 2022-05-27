import { AlertColor } from '@mui/material';
import { createContext, useContext } from 'react';

type SnackBarContextActions = {
  showSnackBar: (text: string, typeColor: AlertColor) => void;
};

export const SnackBarContext = createContext({} as SnackBarContextActions);
const useSnackBar = (): SnackBarContextActions => useContext(SnackBarContext);

export default useSnackBar;
