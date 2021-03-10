import {Component} from 'react'
import TodoList from './Components/ToDo-List/TodoList'

export default class App extends Component {
  render() {
    return(
      <div>
        <TodoList />
      </div>
    )
  }
}