import React from 'react';
import { useSetRecoilState } from 'recoil'

import addItemDialogState from './atoms/todoList/addItemDialog'
import todoListFilterDrawerState from './atoms/todoList/todoListFilterDrawer'

import TodoListStats from './components/TodoListStats'
import TodoList from './components/TodoList'
import TodoItemCreator from './components/TodoItemCreator'
import TodoListFilters from './components/TodoListFilters'

import './styles/global.css'
import { View } from 'react-native'
import { Appbar, AppbarBottom, Fab, Icon, withTheme } from 'material-bread'

const App = ({theme}) => {
  const setShowAddItemDialog = useSetRecoilState(addItemDialogState);
  const setShowFilterDrawer = useSetRecoilState(todoListFilterDrawerState);
  return (
    <>
      <Appbar
        barType={"normal"}
        title={'Todo Recoil'}
        actionItems={[{ name: 'filter-list', onPress: () => setShowFilterDrawer(true) }]}
      />
      <View style={{flex: 1, height: '100%'}}>
        <TodoListStats />
        <TodoList />
        <TodoItemCreator />
        <View style={{ width: 5, height: 20 }} />
      </View>
      <AppbarBottom
        fab={<Fab icon={<Icon name="add" size={30} color={theme.primary.buttonText} />} backgroundColor={theme.primary.button} onPress={() => {setShowAddItemDialog(true)}} />}
        fabPosition={'center'}
        style={{marginTop: 16, position: 'absolute', bottom: 0, left: 0, minWidth: '100%'}}
      />
      <TodoListFilters />
    </>
  );
}

export default withTheme(App);
