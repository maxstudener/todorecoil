import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'

import todoListFilterState from '../atoms/todoList/todoListFilter'
import todoListStatsState from '../atoms/todoList/selector/todoListStats'

import { Chip, withTheme } from 'material-bread'
import { View } from 'react-native'

const TodoListStats = ({theme}) => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: 20 }}>
      <View style={{ marginRight: 10 }}>
        <Chip 
          color={filter === 'Show All' ? theme.primary.button : '#e3e3e3'} 
          textStyles={{color: filter === 'Show All' ? theme.primary.buttonText : theme.textColor.secondary}}
          text={`Total: ${totalNum}`} 
          onPress={() => setFilter('Show All')} />
      </View>
      <View style={{ marginRight: 10 }}>
        <Chip 
          color={filter === 'Show Completed' ? theme.primary.button : '#e3e3e3'} 
          textStyles={{color: filter === 'Show Completed' ? theme.primary.buttonText : theme.textColor.secondary}}
          text={`Completed: ${totalCompletedNum}`} 
          onPress={() => setFilter('Show Completed')} />
      </View>
      <View style={{ marginRight: 10 }}>
        <Chip 
          color={filter === 'Show Uncompleted' ? theme.primary.button : '#e3e3e3'} 
          textStyles={{color: filter === 'Show Uncompleted' ? theme.primary.buttonText : theme.textColor.secondary}}
          text={`Uncompleted: ${totalUncompletedNum}`} 
          onPress={() => setFilter('Show Uncompleted')} />
      </View>
      <Chip text={`Percent completed: ${formattedPercentCompleted}%`} />
    </View>
  );
}

export default withTheme(TodoListStats);
