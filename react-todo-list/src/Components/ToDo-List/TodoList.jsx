import {Component} from 'react'
import ListItem from '../list-item/ListItem'
import placeHolderTasks from '../PlaceHolderTasks'

export default class TodoList extends Component {
    state = {
        taskArray: placeHolderTasks,
       newItemInput:''
    }

handleButtonClick = (e) => {
    e.preventDefault()
    this.setState({
        taskArray: []
    })
     console.log('Hi')
}
handleNewItemChange = (e) => {
    this.setState( {
        newItemInput: e.target.target
    },() => {
        console.log(this.state)
    })
}
handleNewItemSubmit = (e) => {
    e.preventDefault()
    this.setState(e)
        
}

        
    render() {
        const listItems = this.state.taskArray.map((placeHolderTask, index) => {
        return(
            <ListItem todo={placeHolderTask.todo} key={`ListItem ${index}`}/>)
        })
        return (
            <div>
                <h1>
                 Things I should stop procrastinating:</h1>
                 <form onSubmit={this.handleNewItemSubmit}>
                     <input type="text"
                     placeholder="Type an item here"
                     onChange={this.handleNewItemChange}
                     value={this.state.newItemInput}
                     ></input>

                     <input
                     type='submit'
                     value='Add Item'
                     />
                 </form>

                 <ul>
                {listItems}
                 </ul>
                 <form onSubmit={this.handleButtonClick}>
                     <input type="submit" value="Finished the list"></input>
                 </form>
            </div>
        )
    }
}