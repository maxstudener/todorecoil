import React from 'react';
import { useRecoilValue } from 'recoil'

import filteredTodoListState from '../atoms/todoList/selector/filteredTodoList'

import TodoItem from './TodoItem'

const TodoApp = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoApp;
