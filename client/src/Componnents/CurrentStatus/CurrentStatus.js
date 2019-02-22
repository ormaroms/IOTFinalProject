import React, { Component, Fragment } from 'react';
import {Button, Paper, FormGroup, AppBar, Grid, FormControlLabel, Typography, Switch, FormLabel, FormHelperText, FormControl } from '@material-ui/core';
import styles from './CurrentStatus.css'
import { withStyles } from '@material-ui/core/styles';


class CurrentStatue extends Component {
    state = {
        isGasLit: true,
        isGasLiking: false,
    };


    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    
    render() {
        const { classes } = this.props;
        const {isGasLit, isGasLiking} = this.state;
        
        return (
            
            <Fragment>
                <Paper className={classes.root} elevation={1}>                     
                    <Typography variant="h5" component="h3" className={classes.title}>
                        Current Status
                    </Typography>
                    <Typography className={classes.date} component="h6">
                        Friday, 7 December, 12:37:43
                    </Typography>
                    
                    <p className={classes.arduinoID}>
                        Arduino Id : BlaBlaBla
                    </p>
                    
                    <div className={classes.inidcatorSection}>
                        <div className={classes.rowForIndicators}>
                            <Typography>
                                is gas liking: 
                            </Typography>
                            {isGasLiking ?
                                <Typography>
                                    Yes
                                </Typography>:
                                <Typography>
                                    No
                                </Typography>
                            }
                        </div>
    
                        <div className={classes.rowForIndicators}>
                            <Typography>
                                is gas lit:
                            </Typography>
                            {isGasLit ?
                                <Typography>
                                    Yes
                                </Typography>:
                                <Typography>
                                    No
                                </Typography>
                            }
                        </div>
                    </div>
                </Paper>
            </Fragment>

   
        );
    }
}

export default  withStyles(styles)(CurrentStatue);
