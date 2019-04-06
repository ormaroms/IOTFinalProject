import React, {Component} from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/'
import './App.css';
import StatusContainer from "./containers/StatusContainer";
import LogIn from "./components/LogIn/LogIn"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
                        <LogIn/>
                    </header>
                </div>
            </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
