import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions.js'
import {combineReducers} from 'redux'

const {SHOW_ALL} = VisibilityFilters

// 每个reducer处理特定的state
function visibilityFilter(state=SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state=[], action){
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index){
          return Object.assign({}, todo, {completed: !todo.completed})
        }
        return todo
      })
    default:
      return state
  }
}

// 可以使用redux的combineReducers进行简化
// function todoApp(state=initialState, action){
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp