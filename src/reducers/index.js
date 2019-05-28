import { combineReducers } from 'redux'
import status from './status'
import app from './app'
import login from './login'
import arduionsList from './arduionsList'
import statusHistory from './statusHistory'
import statisticsChart from './statisticsChart'


export default combineReducers({status,arduionsList, app, login,statusHistory, statisticsChart})