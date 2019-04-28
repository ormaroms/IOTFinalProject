import { connect } from 'react-redux'
import AddArduino from '../components/AddArduino/AddArduino'
import {arduionsListLoaded} from '../actions/arduionsList'
import {getUserDevices} from '../serverapi';


const mapStateToProps = state => {
    return {
        token: state.app.token,
        ...state.arduionsList,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getUserDevices: (token) => {
            console.log("token" + token)
            getUserDevices(token).then(res => {
                console.log("User devices loaded")
                dispatch(arduionsListLoaded(res.data))
            }).catch(err => {
                console.error("User dicices load failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArduino)