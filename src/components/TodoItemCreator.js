import React, {useState} from 'react'
import { useSetRecoilState, useRecoilState } from 'recoil'

import todoListState from '../atoms/todoList/todoList'
import addItemDialogState from '../atoms/todoList/addItemDialog'

import { Dialog, TextField, withTheme } from 'material-bread'

const TodoItemCreator = ({theme}) => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const [showDialog, setShowDialog] = useRecoilState(addItemDialogState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: oldTodoList[oldTodoList.length - 1] ? oldTodoList[oldTodoList.length - 1] + 1 : 1,
          text: inputValue,
          isComplete: false,
        },
      ]);
    setInputValue('');
  };

  return (
    <Dialog
      visible={showDialog}
      onTouchOutside={() => { setShowDialog(false) }}
      title={'Add Todo'}
      titleStyle={{color: theme.textColor.primary}}
      style={{ backgroundColor: theme.background.default }}
      actionItems={[
        {
          text: 'Cancel',
          textColor: theme.primary.button,
          onPress: () => { setShowDialog(false) },
        },
        {
          text: 'OK',
          textColor: theme.primary.button,
          onPress: () => {
            addItem()
            setShowDialog(false)
          },
        },
      ]}
    >
      <TextField
        labelColor={theme.textColor.primary}
        focusedLabelColor={theme.primary.button}
        underlineColor={theme.primary.button}
        underlineActiveColor={theme.primary.button}
        style={{
          color: theme.textColor.primary,
        }}
        label={'Todo'}
        value={inputValue}
        onChangeText={value => { setInputValue(value) }} />
    </Dialog>
  );
}

export default withTheme(TodoItemCreator);
