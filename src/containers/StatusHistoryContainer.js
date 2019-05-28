import { connect } from 'react-redux'
import statusHistory from '../components/StatusHistory/StatusHistory'
import {statusDataFetched} from '../actions/statusHistory'
import {getStatusHistory} from '../serverapi';


const mapStateToProps = state => {
    return {
        token: state.app.token,
        ...state.statusHistory,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getStatusHistory: (token) => {
            console.log("token" + token)
            getStatusHistory(token).then(res => {
                console.log("status history  loaded")
                console.log(res.data)
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