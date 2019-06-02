import React, {Component, Fragment} from 'react';
import styles from './ArduionsList.css'
import {withStyles} from '@material-ui/core/styles';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
import DeleteIcon from '@material-ui/icons/Delete';
import BarChart from '@material-ui/icons/BarChart';
import Timelapse from '@material-ui/icons/Timelapse';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes

class ArduionsList extends Component {

    componentDidMount() {
        this.props.getUserDevices(this.props.token, this.props.user_id);
    }

    constructor(props) {
        super(props);
        this.state = {
            errorMsg: "",
            devices: [],
            isDialogOpen: false
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
        this.props.resetStatus()
        this.props.updateAdruinoId(arduinoId);
    };

    routeToStatusHistory() {
        history.push('status_history')
    }

    routeToStatistics() {
        history.push('statistics_chart')
    }

    logout() {
        this.props.logout()
        history.push('')
    }

    handleCloseDialog() {
        this.setState({isDialogOpen: false})
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
            this.props.addNewDevice(this.props.token, this.props.user_id,
                this.id.value, this.name.value);
            this.setState({formElement: e.target})
        }
    };

    handleDeleteRow = (deviceIdToDelete) => {
        this.props.deleteDevice(this.props.token, this.props.user_id, deviceIdToDelete);
    };

    render() {
        console.log(this.props);
        const {classes, devices} = this.props;

        return (
            <Fragment>
                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">
                        <Typography className={classes.title}>
                            Your Devices
                        </Typography>
                        <div>
                            <LogoutIcon onClick={this.logout.bind(this)} style={{float: 'right' , fontSize: 35, cursor: 'pointer'}}/>
                            <Timelapse onClick={this.routeToStatusHistory} style={{float: 'left', fontSize: 35, cursor: 'pointer'}}/>
                            <BarChart onClick={this.routeToStatistics} style={{float: 'left', fontSize: 35, cursor: 'pointer'}}/>
                            <AddIcon onClick={() => this.setState({isDialogOpen: true})} style={{float: 'left', fontSize: 35, cursor: 'pointer'}}/>
                        </div>
                    </AppBar>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Device Id</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>

                    </Table>

                    <div style={{overflow: 'auto', maxHeight: '300px'}}>
                        <Table style={{tableLayout: 'fixed'}}>
                            <TableBody className={classes.tableRows}>

                                {this.state.devices && this.state.devices.map((device) => {
                                    return (
                                        <TableRow key={device.id} hover>
                                            <TableCell component="th" scope="row"
                                                       onClick={() => this.handleRouteToStatus(device.id)}>
                                                {device.id}
                                            </TableCell>
                                            <TableCell
                                                onClick={() => this.handleRouteToStatus(device.id)}>{device.name}</TableCell>
                                            <TableCell><DeleteIcon
                                                onClick={() => this.handleDeleteRow(device.id)}  style={{cursor: 'pointer'}}/></TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    <Dialog open={this.state.isDialogOpen} onClose={this.handleCloseDialog.bind(this)} aria-labelledby="form-dialog-title">
                        <form onSubmit={this.handleAddRow}>
                            <DialogTitle id="form-dialog-title">Add a new device</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Add a new gas monitor device.
                                </DialogContentText>

                                <TextField
                                    id="id"
                                    placeholder="Device Id"
                                    inputRef={el => this.id = el}
                                    autoFocus
                                    margin="dense"
                                    fullWidth
                                />
                                <TextField
                                    id="name"
                                    placeholder="Name"
                                    inputRef={el => this.name = el}
                                    margin="dense"
                                    fullWidth
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleCloseDialog.bind(this)} color="primary" >
                                    Close
                                </Button>
                                <Button onClick={this.handleCloseDialog.bind(this)} color="primary" type="submit">
                                    Add
                                </Button>
                            </DialogActions>
                        </form>
                    </Dialog>
                    <p className={classes.error}>{this.state.errorMsg}</p>
                    {/*<AddCircle className={classes.addButton} onClick={this.handleAddRow}/>*/}
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(ArduionsList);
