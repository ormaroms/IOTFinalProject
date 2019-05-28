import React, {Component, Fragment} from 'react';
import styles from './ArduionsList.css'
import {withStyles} from '@material-ui/core/styles';
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
import BarChart from '@material-ui/icons/BarChart';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class ArduionsList extends Component {

    componentDidMount() {
        this.props.getUserDevices(this.props.token, this.props._id);
    }

    constructor(props) {
        super(props);
        this.state = {
            errorMsg: "",
            devices: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errorMsg) {
            this.setState({errorMsg: nextProps.errorMsg});
        } else if (nextProps.devices) {
            if (this.state.formElement) {
                this.state.formElement.reset();
            }
            this.setState({devices: nextProps.devices, errorMsg: ""});
        }
    }

    handleRouteToStatus = (arduinoId) => { // redirect to Status
        this.props.updateAdruinoId(arduinoId);
    };

    routeToStatusHistory() {
        history.push('statusHistory')
    }


    handleAddRow = (e) => {
        e.preventDefault();
        

        let arduinoId = this.id.value;
        let arduinoName = this.name.value;

        if (arduinoId == '' || arduinoName == '') {
            this.setState({errorMsg: "Field can not be empty"})
        } else if (isNaN(arduinoId)) {
            this.setState({errorMsg: "Device id field must contain only numbers"})
        } else {
            this.props.addNewDevice(this.props.token,this.props._id,
                this.id.value, this.name.value);
            this.setState({formElement: e.target})
        }
    };

    handleDeleteRow = (deviceIdToDelete) => {
        this.props.deleteDevice(this.props.token,this.props._id, deviceIdToDelete);
    };

    render() {
        console.log(this.props);
        const {classes, devices} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">
                        <BarChart onClick={this.routeToStatusHistory}/>
                        {/*<p className={classes.text}>*/}
                        {/*    Dont have an account yet? <a href className={classes.signUp} onClick={this.routeToStatusHistory}> Sign up </a>*/}
                        {/*</p>*/}


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

                    </Table>

                    <div style={{overflow: 'auto', height: '100px'}}>
                        <Table style={{tableLayout: 'fixed'}}>
                            <TableBody className={classes.tableRows}>

                                {this.state.devices && this.state.devices.map((device, index) => {
                                    return (
                                        <TableRow key={index} hover onClick={() => this.handleRouteToStatus(device.id)}>
                                            <TableCell component="th" scope="row">
                                                {device.id}
                                            </TableCell>
                                            <TableCell>{device.name}</TableCell>
                                            <TableCell><DeleteIcon
                                                onClick={() => this.handleDeleteRow(device.id)}/></TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    <p className={classes.addDeviceTitle}>Add device</p>
                    <form onSubmit={this.handleAddRow}>
                        <Grid container spacing={24}>
                            <Grid item xs={5}>
                                <TextField
                                    id="id"
                                    // type="number"
                                    placeholder="Arduino Id"
                                    inputRef={el => this.id = el}
                                    style={{width: 95}}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    id="name"
                                    placeholder="Name"
                                    inputRef={el => this.name = el}
                                    style={{width: 100}}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <Button type="submit">
                                    <AddCircle className={classes.addButton}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                    <p className={classes.error}>{this.state.errorMsg}</p>

                    {/*<AddCircle className={classes.addButton} onClick={this.handleAddRow}/>*/}
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(ArduionsList);
