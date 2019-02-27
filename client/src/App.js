import React, {Component} from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/'
import './App.css';
import StatusContainer from "./containers/StatusContainer";

const store = createStore(reducers)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <StatusContainer/>
                    </header>
                </div>
            </Provider>
        );
    }
}

export default App;
