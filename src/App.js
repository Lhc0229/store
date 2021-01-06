import React, {Component} from 'react';
import { store } from "./store/index";

import  { Provider } from 'react-redux';
import Book from './components/Book/Book'

class App extends Component {

    constructor(props) {
        super(props);
        this.state={ }
    }

    render(){
        return (
            <Provider store={store}>
                <div className="App">
                    <Book />
                </div>
            </Provider>
        );
    }
}

export default App;
