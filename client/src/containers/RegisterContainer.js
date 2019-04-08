import { connect } from 'react-redux'
import Register from '../components/Register/Register'


const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (userName, password) => {
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)