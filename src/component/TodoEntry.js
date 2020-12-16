
import React, { Component } from 'react';


 class TodoEntry extends Component {
    state = {
        value: ''
    };
    keyHandle(event) {
        if (event.keyCode !== 13) {
            return;
        }
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({ value: "" });
    }

    render() {
        return (
            <header className="header">
                <h1>Todo</h1>
                <input
                    onKeyDown={(event) => this.keyHandle(event)}
                    onChange={
                        event => this.setState({ value: event.target.value })}
                    value={this.state.value}
                    type="text"
                    className="new-todo"
                    placeholder="what need to bee done" />

            </header>

        );
    }
}
 

export default TodoEntry