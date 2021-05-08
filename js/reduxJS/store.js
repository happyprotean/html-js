import {createStore} from 'redux'
import { addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters } from './actions.js'
import todoApp from './reducer.js'

let store = createStore(todoApp)

console.log(store.getState())

const unsubscirbe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('learn actions'))
store.dispatch(addTodo('learn reducer'))
store.dispatch(addTodo('learn store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscirbe()
