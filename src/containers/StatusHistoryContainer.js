import { connect } from 'react-redux'
import statusHistory from '../components/StatusHistory/StatusHistory'
import {statusDataFetched} from '../actions/statusHistory'
import {getStatusHistory} from '../serverapi';


const mapStateToProps = state => {
    return {
        token: state.app.token,
        ...state.statusHistory,
        ...state.login
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getStatusHistory: (token,id) => {
            console.log("token" + token)
            getStatusHistory(token,id).then(res => {
                console.log("status history  loaded")
                console.log(res.data)
                debugger

                const filteredDevices = res.data.forEach(currentDevice => currentDevice.history.filter(currentHistory => {
                    if (currentHistory.gasStatus === true || currentHistory.lightStatus === true) {
                        return currentHistory
                    }
                    else return []
                }))

                const devicesHistory = {devicesHistory : res.data};
                dispatch(statusDataFetched(devicesHistory))
            }).catch(err => {
                console.error("status history loading failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(statusHistory)