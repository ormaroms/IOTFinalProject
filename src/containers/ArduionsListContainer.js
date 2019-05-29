import { connect } from 'react-redux'
import ArduionsList from '../components/ArduinosList/ArduionsList'
import {arduionsListLoaded, deviceActionSucceeded, deviceAdditoinField, updateAdruinoId} from '../actions/arduionsList'
import {resetStatus} from '../actions/status'
import {getUserDevices, addNewDevice, deleteDevice, updateDevice} from '../serverapi';
import {Logout} from '../actions/login'
import history from '../history';


const mapStateToProps = state => {
    return {
        token: state.app.token,
        user_id: state.app.user_id,
        ...state.arduionsList,
        ...state.login
    }
}

const mapDispatchToProps = dispatch => {

    return {
        logout: () => {
            console.log("Logged out")
            dispatch(Logout())
        },

        resetStatus: () => {
            dispatch(resetStatus())
        },

        getUserDevices: (token, id) => {
            console.log("token" + token)
            getUserDevices(token, id).then(res => {
                console.log("User devices loaded")
                dispatch(arduionsListLoaded(res.data))
            }).catch(err => {
                console.error("User devices load failed")
                console.error(err)
            })
        },
        updateAdruinoId: (id) => {
            dispatch(updateAdruinoId(id));
            history.push('/device_status/' + id)
        },
        addNewDevice: (token, id, newDeviceId, newDeviceName) => {
            addNewDevice(token, id, newDeviceId, newDeviceName).then(res => {
               console.log("Device with id " + newDeviceId + " was added successfully.")
                dispatch(deviceActionSucceeded(res.data));
            }).catch(err => {
                console.log("Error in device addition with id " + newDeviceId);
                console.log(err.response);
                dispatch(deviceAdditoinField(err.response.data.message));
            })
        },
        deleteDevice: (token, id, deviceToDelete) => {
            deleteDevice(token, id, deviceToDelete).then(res => {
                console.log("Delete device with id " + deviceToDelete + " succeeded.")
                dispatch(deviceActionSucceeded(res.data));
                }
            ).catch(error => {
                console.log("Error in deleting device with id " + deviceToDelete);
                console.log(error)
            })
        },
        updateDevice: (token, deviceToUpdateId, deviceNewName) => {
            updateDevice(token, deviceToUpdateId, deviceNewName).then(res => {
                console.log("Device with id " + deviceToUpdateId + " was updated successfully.")
                dispatch(deviceActionSucceeded(res.data));
            }).catch(err => {
                console.log("Error in device updating with id " + deviceToUpdateId);
                console.log(err);
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArduionsList)