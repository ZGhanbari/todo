
import React, { Component } from 'react'

 class Footer extends Component {
constructor(){
  super()
  this.clear=this.clear.bind(this)
}
clear(){
  this.props.clear()
}
  
    render() {
      
        return (
<div className="footer">

        <div className="todo-count"> completed: {this.props.count} </div>
        <div className="todo-count">   total: {this.props.number}</div>
        <div className="clear-completed">
          <button onClick={this.clear}>
            clear completed
          </button>
        </div>
        
</div>
        );
    }
}
export default Footer