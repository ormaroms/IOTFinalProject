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
        register: (userName, password, name, email) => {
            register(userName, password, name, email).then(res => {
                console.log("User register succeeded")
                dispatch(RegisterSuccceeded(res.data))
            }).catch(err => {
                console.error("User register failed")
                dispatch(RegisterFailed(err))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)