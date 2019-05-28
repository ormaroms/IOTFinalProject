import React, { Component, Fragment } from 'react';
import styles from './StatisticsChart.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, FormLabel, Paper, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class StatisticsChart extends Component {

    componentDidMount() {

    }

    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            Statistics
                        </Typography>
                    </AppBar>

                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Register);
