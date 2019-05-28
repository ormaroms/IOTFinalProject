import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import {LoginSuccceeded, LoginFailed} from '../actions/login'
import {login} from '../serverapi/'
import history from '../history'


const mapStateToProps = state => {

    return {
        ...state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userName, password) => {
            login(userName, password).then(res => {
                console.log("User login succeeded")
                dispatch(LoginSuccceeded(res.data))
                history.push('/arduionsList')
            }).catch(err => {
                console.error("User login failed")
                console.error(err)
                dispatch(LoginFailed(err.response.data.message))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)