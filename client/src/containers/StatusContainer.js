import { connect } from 'react-redux'
import CurrentStatus from '../components/CurrentStatus/CurrentStatus'
import {statusDataFectched} from '../actions/status'
import {getStatus} from '../serverapi/'


const mapStateToProps = state => {
    return {
        
        ...state.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getStatus: id => {
            getStatus(id).then(res => {
                console.log("Status data fetched")
                dispatch(statusDataFectched(res.data))
            }).catch(err => {
                console.error("Status data fetched failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStatus)