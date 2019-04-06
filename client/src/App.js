import React, {Component} from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/'
import './App.css';
import StatusContainer from "./containers/StatusContainer";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
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
                        <Login/>
               {/*<Register/>*/}
                    </header>
                </div>
            </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
