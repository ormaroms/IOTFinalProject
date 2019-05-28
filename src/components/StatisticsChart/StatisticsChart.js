import React, { Component, Fragment } from 'react';
import styles from './StatisticsChart.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, FormLabel, Paper, Typography} from '@material-ui/core';
import Chart from "react-google-charts";
import AppBar from '@material-ui/core/AppBar';

const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
];
// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

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

                </Paper>
                <div>
                    <Chart className= {classes.chart}
                           chartType="ColumnChart"
                           data={chartData}
                    />
                </div>
            </Fragment>

        );
    }
}

export default withStyles(styles)(StatisticsChart);
