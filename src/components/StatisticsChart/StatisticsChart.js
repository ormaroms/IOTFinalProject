import React, { Component, Fragment } from 'react';
import styles from './StatisticsChart.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, FormLabel, Paper, Typography} from '@material-ui/core';
import Chart from "react-google-charts";
import AppBar from '@material-ui/core/AppBar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactTabs from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const options = {
    hAxis: {title: "Days"},
    vAxis: {title: "Times",viewWindow: {min:0, max:10}}
}

class StatisticsChart extends Component {

    componentDidMount() {
        this.props.getStatistics(this.props.token, this.props.user_id);

    }

    constructor(props) {
        super(props);
        this.state = { tabIndex: 0 };
    }


    render() {
        const {classes, lightOptions, gasOptions} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            Statistics
                        </Typography>
                    </AppBar>

                    <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}
                          className={classes.tabs}>
                        <TabList>
                            <Tab>Light</Tab>
                            <Tab >Gas</Tab>
                        </TabList>

                        <TabPanel>
                            <div>
                                <p>Last week light statistics </p>
                                <Chart className= {classes.chart}
                                       chartType="ColumnChart"
                                       data={lightOptions}
                                       options={options}
                                />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <p>Last week gas statistics </p>
                                <Chart className= {classes.chart}
                                       chartType="ColumnChart"
                                       data={gasOptions}
                                       options={options}
                                />
                            </div>
                        </TabPanel>
                    </Tabs>


                </Paper>
            </Fragment>

        );
    }
}

export default withStyles(styles)(StatisticsChart);
