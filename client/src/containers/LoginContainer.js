import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import {LoginSuccceeded, LoginFailed} from '../actions/login'
import {login} from '../serverapi/'
import history from '../history'


const mapStateToProps = state => {
    return {

        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userName, password) => {
            debugger;
            login(userName, password).then(res => {
                console.log("User login succeeded")
                dispatch(LoginSuccceeded(res.data))
                history.push('/status')
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