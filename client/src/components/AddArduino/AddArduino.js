import React, { Component, Fragment } from 'react';
import styles from './AddArduino.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, Paper, TextField, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
// Add arduino component - in this component user can add new arduino

class AddArduino extends Component {

    componentDidMount() {
        this.props.getUserDevices(this.props.token);
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        // TODO: add validation
        e.preventDefault();
        this.props.addArduino(this.userName.value, this.password.value);
        debugger;
    }

    routeToArduinosList() {
        history.push('arduionsList');
    }

    render() {
        console.log(this.props);
        const {classes} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">
                        <Typography className={classes.title}>
                            Add new arduino
                        </Typography>
                    </AppBar>

                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            id="arduinoId"
                            variant="outlined"
                            label="Enter the id that is written on the arduino"
                            inputRef={el => this.userName = el}
                        />
                        <TextField
                            id="arduinoName"
                            variant="outlined"
                            label="Choose name for this arduino"
                            inputRef={el => this.userName = el}
                        />

                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                          Add
                        </Button>
                    </form>



                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(AddArduino);
