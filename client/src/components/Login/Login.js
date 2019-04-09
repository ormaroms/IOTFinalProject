import React, { Component, Fragment } from 'react';
import styles from './Login.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, FormLabel, Paper, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history'
import {login} from "../../serverapi";


// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class Login extends Component {

    componentDidMount() {

    }

    constructor(props) {
        debugger;
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.userName.value, this.password.value)
    }

    routeToRegister() {
        history.push('register')
    }

    render() {
        console.log(this.props);
        const {classes} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            Log In
                        </Typography>
                    </AppBar>

                    <FormControl>


                    </FormControl>
                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="userName"
                                //className={classNames(classes.margin, classes.textField)}
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
                                Log In
                            </Button>
                        </form>

                        <p className={classes.text}>
                            Dont have an account yet? <a href className={classes.signUp} onClick={this.routeToRegister}> Sign up </a>
                        </p>
                    </div>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Login);
