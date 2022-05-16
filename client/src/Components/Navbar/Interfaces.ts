import React, { Dispatch, MouseEvent, SetStateAction } from 'react';

interface INavbar {
  setCodeFormOpen: Dispatch<SetStateAction<boolean>>;
}
interface INavbarActions {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  space?: number;
  avatarPosition?: number;
  setDrawer: Dispatch<SetStateAction<boolean>>;
  setCodeForm: Dispatch<SetStateAction<boolean>>;
}

interface IMenuList {
  setDrawer: Dispatch<SetStateAction<boolean>>;
  toggleMenu: (e: MouseEvent<HTMLElement> | undefined) => void;
  anchorEl: HTMLElement | null;
}

export { IMenuList, INavbarActions, INavbar };
