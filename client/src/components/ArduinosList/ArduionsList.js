import React, { Component, Fragment } from 'react';
import styles from './ArduionsList.css'
import { withStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Typography,
    TextField,
    Button
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircle from '@material-ui/icons/Add';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class ArduionsList extends Component {

    componentDidMount() {
        this.props.getUserDevices(this.props.token);
    }

    constructor(props) {
        super(props);
        this.state = {devices: []};
    }
    componentWillReceiveProps(nextProps) {
        debugger;
        console.log("HERE");
        console.log(nextProps);
        this.setState({ devices: nextProps.devices });
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ chips: this.nextProps.tags_list });
    // }(){
    //     debugger;
    //     this.state = {
    //         devices: this.props.devices
    //     }
    // }
    routeToCurrentStatus() { // redirect to Status
    }

    routeToAddArduino() {
        history.push('addArduino');
    }

    handleAddRow = (e) => {

        debugger;
        e.preventDefault();
        this.state.devices.push({"id": this.id.value,
            "name": this.name.value});
        this.props.addNewDevice(this.props.token,
            this.state.devices);


        // const newDevice = {
        //     id: "",
        //     name: ""
        // };
        // this.setState({
        //     devices: [...this.state.devices, newDevice]
        // });
    };

    handleDeleteRow = (deviceIdToDelete) => {


        // // Get the index of the device
        // let deviceIndex = this.state.devices.findIndex(function(device){
        //     return device.id == deviceIdToDelete;
        // })
        //
        // // Delete
        // debugger;
        // const newDevice = {
        //     id: "",
        //     name: ""
        // };
        // this.setState({
        //     devices: [...this.state.devices, newDevice]
        // });
    };

    render() {
        console.log(this.props);
        const {classes, devices} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">

                        <Typography className={classes.title}>
                            Your Arduions
                        </Typography>
                    </AppBar>
                    
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Arduino Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        { this.state.devices && this.state.devices.map( (device,index) => {
                            return(
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {device.id}
                                    </TableCell>
                                    <TableCell>{device.name}</TableCell>
                                    <TableCell><DeleteIcon onClick={() => this.handleDeleteRow(device.id)}/></TableCell>
                                </TableRow>
                            )
                        })}
                        </TableBody>
                    </Table>

                    <form onSubmit={this.handleAddRow}>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <TextField
                                id="id"
                                inputRef={el => this.id = el}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="name"
                                inputRef={el => this.name = el}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>






                    </form>

                {/*<AddCircle className={classes.addButton} onClick={this.handleAddRow}/>*/}
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(ArduionsList);
