import { connect } from 'react-redux'
import StatisticsChart from '../components/StatisticsChart/StatisticsChart'
import {StatisticsDataFetched} from '../actions/statisticsChart'
import {getStatusHistory} from '../serverapi';
import history from '../history';


const mapStateToProps = state => {
    return {
        token: state.app.token,
        ...state.arduionsList,
        ...state.login
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getStatistics: (token, id) => {
            console.log("token" + token)
            getStatusHistory(token, id).then(res => {
                console.log("User devices loaded")
                dispatch(StatisticsDataFetched(res.data))
            }).catch(err => {
                console.error("User devices load failed")
                console.error(err)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsChart)