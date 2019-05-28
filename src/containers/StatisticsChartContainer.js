import { connect } from 'react-redux'
import StatisticsChart from '../components/StatisticsChart/StatisticsChart'
import {StatisticsDataFetched} from '../actions/statisticsChart'
import {getStatusHistory} from '../serverapi';
import history from '../history';


const mapStateToProps = state => {
    debugger;
    return {
        token: state.app.token,
        ...state.arduionsList,
        ...state.login,
        ...state.statisticsChart
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getStatistics: (token, id) => {
            getStatusHistory(token, id).then(res => {
                debugger;
                let chartData = getChartArray(res.data);
                dispatch(StatisticsDataFetched({chartData: chartData}))
            }).catch(err => {
                console.error("User devices load failed")
                console.error(err)
            })
        }
    }
}

function getChartArray(data) {
debugger;
    var weekStart = new Date();
    weekStart.setDate(weekStart.getDate() -7)

    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
    let counter = [0,0,0,0,0,0,0];

    // Create array of all statuses
    let allStatuses = [];
    data.forEach(function(userArduinoStatuses){
        allStatuses = allStatuses.concat(userArduinoStatuses.history)
    });

    // Running over the statuses
    allStatuses.forEach(function(status){
        let statusTime = new Date(status.time)
        // Check if the status is relavant
        if(statusTime > weekStart) {
            if (status.gasStatus){
                counter[statusTime.getDay()]++;
            }
        }
    })

    // Shift days order
    for (let i = 0; i < new Date().getDay() + 1; i++){
        let datTemp = daysInWeek.shift();
        let countTemp = counter.shift();
        daysInWeek.push(datTemp);
        counter.push(countTemp)
    }



    let options =  [
        ["Element", "Count", { role: "style" }],
    ];

    // Create the array for the chart
    for (let i = 0; i < 7; i++) {
        options.push( [daysInWeek[i], counter[i], "blue"]);
    }

    return options;
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsChart)