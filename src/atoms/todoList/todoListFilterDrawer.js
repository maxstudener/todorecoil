import { atom } from 'recoil';

const todoListFilterDrawer = atom({
  key: 'todoListFilterDrawerState',
  default: false,
});

export default todoListFilterDrawer;
