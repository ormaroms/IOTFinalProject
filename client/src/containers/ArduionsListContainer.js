import { connect } from 'react-redux'
import ArduionsList from '../components/ArduinosList/ArduionsList'
import {arduionsListLoaded, deviceActionSucceeded} from '../actions/arduionsList'
import {getUserDevices, addNewDevice, deleteDevice, updateDevice} from '../serverapi';


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

                debugger;
                dispatch(arduionsListLoaded(res.data))
            }).catch(err => {
                console.error("User devices load failed")
                console.error(err)
            })
        },
        addNewDevice: (token, newDeviceId, newDeviceName) => {
            debugger;
            addNewDevice(token, newDeviceId, newDeviceName).then(res => {
                debugger;
               console.log("Device with id " + newDeviceId + " was added successfully.")
                dispatch(deviceActionSucceeded(res.data));
            }).catch(err => {
                debugger;
                console.log("Error in device addition with id " + newDeviceId);
                console.log(err);
            })
        },
        deleteDevice: (token, deviceToDelete) => {
            deleteDevice(token, deviceToDelete).then(res => {
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
                debugger;
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