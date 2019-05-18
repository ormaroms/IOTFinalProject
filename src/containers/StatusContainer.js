import { connect } from 'react-redux'
import CurrentStatus from '../components/CurrentStatus/CurrentStatus'
import {statusDataFetched} from '../actions/status'
import {getStatus} from '../serverapi/'


const mapStateToProps = state => {
    return {
        token: state.app.token,
        ...state.status
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getStatus: (token, id) => {
            getStatus(token, id).then(res => {
                console.log("Status data fetched")
                dispatch(statusDataFetched(res.data))
            }).catch(err => {
                console.error("Status data fetched failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStatus)