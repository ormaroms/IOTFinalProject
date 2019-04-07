import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import {LoginSuccceeded} from '../actions/login'
import {logIn} from '../serverapi/'


const mapStateToProps = state => {
    return {

        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Login: (userName, password) => {
            debugger;
            logIn(userName, password).then(res => {
                debugger;
                console.log("User login succeeded")
                dispatch(LoginSuccceeded(res.data))
            }).catch(err => {
                console.error("User login failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)