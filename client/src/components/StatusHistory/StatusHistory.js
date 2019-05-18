import React, { Component, Fragment } from 'react';
import styles from './StatusHistory.css.js'
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
import DeleteIcon from '@material-ui/icons/Delete';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class statusHistory extends Component {

    componentDidMount() {
        this.props.getStatusHistory(this.props.token);
    }

    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props);
        const {classes, devices} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            status history
                        </Typography>
                    </AppBar>

                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Arduino Id</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell >adirrrr</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {devices && devices.map( (device,index) => {
                                return(
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {device.id}
                                        </TableCell>
                                        <TableCell>{device.name}</TableCell>
                                        <TableCell><DeleteIcon/></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>

                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(statusHistory);
