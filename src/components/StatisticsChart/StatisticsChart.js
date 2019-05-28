import React, { Component, Fragment } from 'react';
import styles from './StatisticsChart.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, FormLabel, Paper, Typography} from '@material-ui/core';
import Chart from "react-google-charts";
import AppBar from '@material-ui/core/AppBar';

const options = {
    hAxis: {title: "Days"},
    vAxis: {title: "Times",viewWindow: {min:0, max:10}}
}

class StatisticsChart extends Component {

    componentDidMount() {
        this.props.getStatistics(this.props.token, this.props._id);
    }

    constructor(props) {
        super(props);
    }


    render() {
        const {classes, chartData} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            Statistics
                        </Typography>
                    </AppBar>
                    <div>
                        <Chart className= {classes.chart}
                               chartType="ColumnChart"
                               data={chartData}
                               options={options}
                        />
                    </div>
                </Paper>
            </Fragment>

        );
    }
}

export default withStyles(styles)(StatisticsChart);
