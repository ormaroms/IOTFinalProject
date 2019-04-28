import { connect } from 'react-redux'
import ArduionsList from '../components/ArduinosList/ArduionsList'
import {arduionsListLoaded, addDeviceSucceeded} from '../actions/arduionsList'
import {getUserDevices, addNewDevice} from '../serverapi';


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
        addNewDevice: (token, deviceToAdd) => {
            debugger;
            addNewDevice(token, deviceToAdd).then(res => {
                debugger;
                // TODO: return after server refactor
               // console.log("New device (id: " + deviceToAdd.id + ") added");
                this.setState({devices: deviceToAdd});
                dispatch(addDeviceSucceeded(res.data))
            }).catch(err => {
                debugger;
                //console.log("Device (id: " + deviceToAdd.id + ") addition failed");
                console.log(err);
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArduionsList)