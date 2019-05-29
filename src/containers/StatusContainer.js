import { connect } from 'react-redux'
import CurrentStatus from '../components/CurrentStatus/CurrentStatus'
import {statusDataFetched} from '../actions/status'
import {getStatus} from '../serverapi/'


const mapStateToProps = (state, ownProps) => {
    return {
        token: state.app.token,
        user_id: state.app.user_id,
        arduinoId: ownProps.match.params.id,
        ...state.status,
        ...state.login,
        ...state.arduionsList
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getStatus: (token, userId, arduinoId) => {
            console.log("Asked status for " + arduinoId + " arduino");
            getStatus(token, userId).then(res => {
               let currArduinoStatus =
                   res.data.filter(function(status){return status.id == arduinoId});

                if (currArduinoStatus.length > 0) {
                    console.log("Status data fetched for arduino "+ arduinoId)
                    dispatch(statusDataFetched(currArduinoStatus[0]))
                } else {
                    console.log("Couldnt find status for arduino "+ arduinoId)
                }

            }).catch(err => {
                console.error("Status data fetched failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStatus)