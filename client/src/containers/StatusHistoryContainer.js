import { connect } from 'react-redux'
import statusHistory from '../components/StatusHistory/StatusHistory'
import {statusDataFetched} from '../actions/statusHistory'
import {getUserDevices} from '../serverapi';


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
            getUserDevices(token).then(res => {
                console.log("status history  loaded")
                window.alert(res.data)
                dispatch(statusDataFetched(res.data))
            }).catch(err => {
                console.error("status history loading failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(statusHistory)