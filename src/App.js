import React, {Component} from 'react';
import Main from "./component/Main"

class App extends Component {
    render() {
        return [
            <div className="todoapp">
                <Main/>
            </div>,
            <footer className="info">
                <p>Written by <a href="https://www.linkedin.com/in/zahra-ghanbari-b768261b5/">Zahra Ghanbari</a></p>
            </footer>
        ]
    }
}


export default App;
