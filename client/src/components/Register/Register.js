import React, { Component, Fragment } from 'react';
import styles from './Register.css'
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, FormLabel, Paper, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class Register extends Component {



    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.state = {errorMsg: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        let userName = this.userName.value;
        let password = this.password.value;
        let email = this.email.value;
        let name = this.name.value;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (userName == '' || password == '' || email == '' || name == '' ) {
            this.setState({errorMsg: "Field can not be empty"})
        } else if (!emailRegex.test(String(email).toLowerCase())) {
            this.setState({errorMsg: "Email adress is not valid"})
        }
        else {
            this.props.register(this.userName.value, this.password.value);
        }
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
                            <Grid item xs={12} className={classes.field}>
                                <TextField
                                    id="name"
                                    variant="outlined"
                                    label="Name"
                                    inputRef={el => this.name = el}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.field}>
                                <TextField
                                    id="email"
                                    variant="outlined"
                                    label="Email"
                                    inputRef={el => this.email = el}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.field}>
                                <TextField
                                    id="userName"
                                    variant="outlined"
                                    label="User Name"
                                    inputRef={el => this.userName = el}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.field}>
                                <TextField ref='password'
                                           type="password"
                                           variant="outlined"
                                           inputRef={el => this.password = el}
                                           label="Password"/>
                            </Grid>

                            <p className={classes.error}>{this.state.errorMsg}</p>

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
