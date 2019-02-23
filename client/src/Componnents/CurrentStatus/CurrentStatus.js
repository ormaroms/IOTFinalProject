import React, { Component, Fragment } from 'react';
import {Paper,Switch, Radio,FormControl,FormLabel,FormControlLabel,FormGroup,Checkbox, Typography,FormHelperText } from '@material-ui/core';
import styles from './CurrentStatus.css'
import { withStyles } from '@material-ui/core/styles';

// This is the current status component
// Will get the isLit isGasLiking arduinoID from the props! ( in the future, after the POC) *propTypes

class CurrentStatus extends Component {
    state = {
        isGasLit: false,
        isGasLiking: true,
        arduinoID: "GuyArduino",
    };


    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    
    render() {
        const { classes } = this.props;
        const {isGasLit, isGasLiking, arduinoID} = this.state;
        
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
                                        checked={isGasLiking}

                                        value="Liking"
                                    />
                                }
                                label="Gas liking "
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isGasLit}

                                        value="lit"
                                    />
                                }
                                label="Gas lit "
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
