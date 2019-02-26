import React, { Component, Fragment } from 'react';
import {Paper,Switch, Radio,FormControl,FormLabel,FormControlLabel,FormGroup,Checkbox, Typography,FormHelperText } from '@material-ui/core';
import styles from './CurrentStatus.css'
import { withStyles } from '@material-ui/core/styles';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class CurrentStatus extends Component {
    componentDidMount() {
        this.props.getStatus(this.props.arduinoID)
    }

    render() {
        const {lightStatus, gasStatus, arduinoID, classes} = this.props;
        
        return (
            
            <Fragment>
                <Paper className={classes.root} elevation={1}>                     
                    <Typography variant="h4" component="h3" className={classes.title}>
                        Current Status
                    </Typography>
                    <Typography className={classes.date} component="h6">
                        Friday, 7 December, 12:37:43
                    </Typography>

                    <p className={classes.arduinoID}>
                        Arduino Id : {arduinoID}
                    </p>


                    <FormControl component="fieldset">
                        <FormLabel component="legend">Indicators</FormLabel>
                        <FormGroup>
   
                            
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={gasStatus}

                                        value="Leaking"
                                    />
                                }
                                label="Gas Leaking "
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={lightStatus}

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
