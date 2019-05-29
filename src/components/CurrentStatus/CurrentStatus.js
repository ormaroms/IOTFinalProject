import React, { Component, Fragment } from 'react';
import {Paper,Switch, Radio,FormControl,FormLabel,FormControlLabel,FormGroup,Checkbox, Typography,FormHelperText } from '@material-ui/core';
import styles from './CurrentStatus.css'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Info from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import history from '../../history'

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class CurrentStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {currentTime: ''};
    }


    componentDidMount() {
        this.props.getStatus(this.props.token, this.props.user_id, this.props.arduinoId);

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        setInterval( () => {
            var date = new Date();
            this.setState({
                currentTime : days[date.getDay()] + ", " + date.getDate() + ' ' + months[date.getMonth()] +
                    ' ' + date.getFullYear() + ', ' + date.toLocaleTimeString()
            })
        },1000)

        setInterval(() => {
            this.props.getStatus(this.props.token, this.props.user_id, this.props.arduinoId);
        }, 10000)
    }

    render() {
        const {lightStatus, gasStatus, arduinoId, classes} = this.props;

        if (this.props.token === undefined || this.props.token === null || this.props.token === "") {
            history.push('/')
            return (<div></div>)
        }
        
        return (
            
            <Fragment key={this.props.arduinoId}>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                            <Typography className={classes.title}>
                                Current Status
                            </Typography>
                            <Typography className={classes.date}>
                                { this.state.currentTime }
                            </Typography>

                    </AppBar>

                    <p className={classes.arduinoID}>
                        <b> Device Id: </b> {arduinoId} {gasStatus} {lightStatus}
                    </p>


                    <FormControl className={classes.inidcatorSection} component="fieldset">
                        <FormLabel component="legend"> <Info/> Indicators</FormLabel>
                        <FormGroup>


                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={gasStatus || false}
                                        value="Leaking"
                                    />
                                }
                                label="Gas Leaking "
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={lightStatus || false}
                                        value="Lit"
                                    />
                                }
                                label="Gas Lit "
                                labelPlacement="start"
                            />


                        </FormGroup>
                    </FormControl>

                </Paper>
            </Fragment>

   
        );
    }
}

export default  withStyles(styles)(CurrentStatus);
