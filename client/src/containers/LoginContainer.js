import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import {LoginSuccceeded, LoginFailed} from '../actions/login'
import {login} from '../serverapi/'


const mapStateToProps = state => {
    return {

        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Login: (userName, password) => {
            debugger;
            login(userName, password).then(res => {
                debugger;
                console.log("User login succeeded")
                dispatch(LoginSuccceeded(res.data))
            }).catch(err => {
                debugger;
                console.error("User login failed")
                console.error(err)
                dispatch(LoginFailed(err))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)