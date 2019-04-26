import { combineReducers } from 'redux'
import status from './status'
import app from './app'
import arduionsList from './arduionsList'


export default combineReducers({status,arduionsList, app})