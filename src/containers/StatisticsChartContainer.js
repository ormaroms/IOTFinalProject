import { connect } from 'react-redux'
import StatisticsChart from '../components/StatisticsChart/StatisticsChart'
import {StatisticsDataFetched} from '../actions/statisticsChart'
import {getStatusHistory} from '../serverapi';


const mapStateToProps = state => {
    debugger;
    return {
        token: state.app.token,
        user_id: state.app.user_id,
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
                dispatch(StatisticsDataFetched( chartData))
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
    let lightCounter = [0,0,0,0,0,0,0];
    let gasCounter = [0,0,0,0,0,0,0];

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
                gasCounter[statusTime.getDay()]++;
            }
            if (status.lightStatus){
                lightCounter[statusTime.getDay()]++;
            }
        }
    })

    // Shift days order
    for (let i = 0; i < new Date().getDay() + 1; i++){
        let datTemp = daysInWeek.shift();
        let lightCountTemp = lightCounter.shift();
        let gasCountTemp = gasCounter.shift();
        daysInWeek.push(datTemp);
        lightCounter.push(lightCountTemp)
        gasCounter.push(gasCountTemp)
    }



    let gasOption =  [
        ["Element", "Count", { role: "style" }],
    ];
    let lightOption =  [
        ["Element", "Count", { role: "style" }],
    ];

    // Create the array for the chart
    for (let i = 0; i < 7; i++) {
        gasOption.push( [daysInWeek[i], gasCounter[i], "cornflowerblue"]);
        lightOption.push( [daysInWeek[i], lightCounter[i], "cornflowerblue"]);
    }

    return {lightOptions: lightOption, gasOptions: gasOption};
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsChart)