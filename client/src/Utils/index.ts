import { useSnackBar } from '../Hooks';

export const properCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

export const copyToClipboard = ({ str, showSnackBar }:{str:string; showSnackBar?:any}) => {
  str && navigator.clipboard.writeText(str);
  showSnackBar?.('copied to clipboard', 'success');
};
