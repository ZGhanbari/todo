
import React, { Component }  from 'react';


class TodoItem extends Component {
  constructor(){
    super()
    this.taggle=this.taggle.bind(this)
    this.remove=this.remove.bind(this)
  }

  taggle(){
    this.props.ontoggle(this.props.todo.id)
  }
  remove(){
    this.props.removeTodo(this.props.todo.id)
  }

  render(){ 
{
  const t=this.props.todo
  if(t.complated===true)
  return(
    <li className={'completed'}>
        <div className="view">
            <input type="checkbox" className="toggle" 
              onClick={this.taggle} 
             
            />
      <label >{t.title}</label>
            <button className="destroy"
            onClick={this.remove}
            >
            </button>

        </div>
    </li>
  )
  else
  return(
    <li className={''}>
        <div className="view">
            <input type="checkbox" className="toggle" 
              onClick={this.taggle} 
            checked='no'
            />
      <label >{t.title}</label>
            <button className="destroy"
            onClick={this.remove}
            
            >
            </button>

        </div>
    </li>
  )
 }
  }
}

export default TodoItem