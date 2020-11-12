import React from 'react'
import { useRecoilState } from 'recoil'

import todoListState from '../atoms/todoList/todoList'

import { View } from 'react-native'
import { Checkbox, Button, TextField, withTheme } from 'material-bread'

const TodoItem = ({item, theme}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  const editItemText = (value) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <View style={{ flexDirection: 'row', alignContent: 'center', minWidth: '100%', marginBottom: 10 }}>
      <View style={{marginLeft: 20,marginRight: 20, justifyContent: 'center'}}>
        <Checkbox
          checkboxColor={theme.primary.button}
          unCheckedColor={theme.primary.button}
          checked={item.isComplete}
          onPress={() => { toggleItemCompletion() }} />
        </View>
        <View style={{flexGrow: 1, justifyContent: 'center'}}>
        <TextField
            labelColor={theme.primary.button}
            focusedLabelColor={theme.primary.button}
            underlineColor={theme.primary.button}
            underlineActiveColor={theme.primary.button}
            style={{
              color: theme.textColor.primary,
            }}
            label={'Todo'}
            value={item.text}
            onChangeText={value => { editItemText(value) }} />
      </View>
      <View style={{marginLeft: 20, marginRight: 20, justifyContent: 'center'}}>
        <Button type={'text'} text={'Delete'} onPress={deleteItem} textColor={theme.error.main} />
      </View>
    </View>
  );
}


export default withTheme(TodoItem);
