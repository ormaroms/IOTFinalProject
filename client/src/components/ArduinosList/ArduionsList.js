import React, { Component, Fragment } from 'react';
import styles from './ArduionsList.css'
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
import DeleteIcon from '@material-ui/icons/Delete';
// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class ArduionsList extends Component {

    componentDidMount() {

    }

    constructor(props) {
        super(props);
    }

    routeToCurrentStatus() {
        history.push('currentStatus');

        // this.setState(prevState => ({
        //     rows: [{'Frozen yoghurt', 159, 6.0, 24, 4.0}]
        // }))
    }

    // let id = 0;
    // function createData(name, calories, fat, carbs, protein) {
    //     id += 1;
    //     return { id, name, calories, fat, carbs, protein };
    // }
    //
    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    // ]

    render() {
        console.log(this.props);
        const {classes} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            Your Arduions
                        </Typography>
                    </AppBar>

                    <p> hey Anna! choose the arduino</p>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Arduino Id</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>


                            <TableRow key="1">
                            <TableCell component="th" scope="row">
                            aaa
                            </TableCell>
                            <TableCell align="right">bbb</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"><DeleteIcon/></TableCell>
                            </TableRow>


                            {/*{rows.map(row => (*/}
                                {/*<TableRow key={row.id}>*/}
                                    {/*<TableCell component="th" scope="row">*/}
                                        {/*{row.name}*/}
                                    {/*</TableCell>*/}
                                    {/*<TableCell align="right">{row.calories}</TableCell>*/}
                                    {/*<TableCell align="right">{row.fat}</TableCell>*/}
                                    {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                                    {/*<TableCell align="right">{row.protein}</TableCell>*/}
                                {/*</TableRow>*/}
                            {/*))}*/}
                        </TableBody>
                    </Table>

                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(ArduionsList);
