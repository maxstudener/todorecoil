import React from 'react'
import { useRecoilState } from 'recoil'

import todoListFilterState from '../atoms/todoList/todoListFilter'
import todoListFilterDrawerState from '../atoms/todoList/todoListFilterDrawer'

import {SheetSide, List, ListItem, withTheme} from 'material-bread'

const TodoListFilters = ({theme}) => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const [showFilterDrawer, setShowFilterDrawer] = useRecoilState(todoListFilterDrawerState);

  return (
    <SheetSide
      visible={showFilterDrawer}
      onBackdropPress={() => { setShowFilterDrawer(false) }}
      onSwipeRight={() => { setShowFilterDrawer(false) }}
      style={{ backgroundColor: theme.background.default }}>
      <List
      style={{ backgroundColor: theme.background.default }}>
        <ListItem
          text={'All'}
          onPress={() => {
            setFilter('Show All')
            setShowFilterDrawer(false)
          }}
          selected={filter == 'Show All'}
          textStyle={{color: theme.textColor.primary}}
        />
        <ListItem
          text={'Completed'}
          onPress={() => {
            setFilter('Show Completed')
            setShowFilterDrawer(false)
          }}
          selected={filter == 'Show Completed'}
          textStyle={{color: theme.textColor.primary}}
        />
        <ListItem
          text={'Uncompleted'}
          onPress={() => {
            setFilter('Show Uncompleted')
            setShowFilterDrawer(false)
          }}
          selected={filter == 'Show Uncompleted'}
          textStyle={{color: theme.textColor.primary}}
        />
      </List>
    </SheetSide>
  );
}

export default withTheme(TodoListFilters);
