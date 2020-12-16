
import React, { Component }  from 'react';
import TodoItem from './TodoItem';

 
class TodoItems extends Component {
  render(){
      console.log(this.props.todos)
      return(

    <section className="main">
    <ul className="todo-list">
        {
            this.props.todos.map((todo)=>{
        if(todo)
return(
    <TodoItem todo={todo}
     ontoggle={this.props.ontoggle}
     removeTodo={this.props.removeTodo}
     />
)
            })
        }
        


    </ul>

</section>

      )
  }
}

export default TodoItems