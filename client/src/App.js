import React, {Component} from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/'
import './App.css';
import StatusContainer from "./containers/StatusContainer";
import RegisterContainer from "./containers/RegisterContainer"
import LoginContainer from "./containers/LoginContainer"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Router, Route } from 'react-router-dom';
import history from './history'

const store = createStore(reducers)

const theme = createMuiTheme({
    typography: {
        fontFamily: "Montserrat"
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <Router history={history}>
                            <Route path="/" exact component={LoginContainer} />
                            <Route path="/register" component={RegisterContainer} />
                        </Router>
                    </header>
                </div>
            </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
