import { connect } from 'react-redux'
import Register from '../components/Register/Register'
import {register} from "../serverapi";
import {RegisterSuccceeded, RegisterFailed} from "../actions/register";


const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (userName, password) => {
            debugger;
            register(userName, password).then(res => {
                debugger;
                console.log("User register succeeded")
                dispatch(RegisterSuccceeded(res.data))
            }).catch(err => {
                debugger;
                console.error("User register failed")
                console.error(err)
                dispatch(RegisterFailed(err))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)