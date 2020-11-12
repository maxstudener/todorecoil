import { atom } from 'recoil';

const addItemDialog = atom({
  key: 'addItemDialogState',
  default: false,
});

export default addItemDialog;
