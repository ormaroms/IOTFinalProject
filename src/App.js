import React, {Component} from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/'
import './App.css';
import StatusContainer from "./containers/StatusContainer";
import RegisterContainer from "./containers/RegisterContainer"
import LoginContainer from "./containers/LoginContainer"
import ArduionsListContainer from "./containers/ArduionsListContainer"
import StatisticsChartContainer from "./containers/StatisticsChartContainer"
import statusHistory from "./containers/StatusHistoryContainer.js"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Router, Route } from 'react-router-dom';
import history from './history'


const store = createStore(reducers)
store.subscribe(() => {
    localStorage.setItem('TOKEN', store.getState().app.token)
    localStorage.setItem('USER_ID', store.getState().app.user_id)
})

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
                            <Route path="/device_status/:id" component={StatusContainer} />
                            <Route path="/device_list" component={ArduionsListContainer} />
                            <Route path="/status_history" component={statusHistory} />
                            <Route path="/statistics_chart" component={StatisticsChartContainer} />
                        </Router>
                    </header>
                </div>
            </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
