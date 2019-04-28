import React, { Component, Fragment } from 'react';
import styles from './Register.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, FormLabel, Paper, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class Register extends Component {



    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
       // TODO: add validation
        e.preventDefault();
        this.props.register(this.userName.value, this.password.value);
        debugger;
    }

    render() {
        console.log(this.props);
        const {classes} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            Register
                        </Typography>
                    </AppBar>

                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="name"
                                variant="outlined"
                                label="Name"
                                inputRef={el => this.name = el}
                            />
                            <TextField
                                id="email"
                                variant="outlined"
                                label="Email"
                                inputRef={el => this.email = el}
                            />
                            <TextField
                                id="userName"
                                variant="outlined"
                                label="User Name"
                                inputRef={el => this.userName = el}
                            />
                            <TextField ref='password'
                                       type="password"
                                       variant="outlined"
                                       inputRef={el => this.password = el}
                                       label="Password">
                            </TextField>

                            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                Create account
                            </Button>
                        </form>
                    </div>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Register);
