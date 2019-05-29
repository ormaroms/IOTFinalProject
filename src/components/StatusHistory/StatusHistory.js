import React, { Component, Fragment } from 'react';
import styles from './StatusHistory.css'
import {withStyles} from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, TextField} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/es/Button/Button";
import BarChart from "@material-ui/core/SvgIcon/SvgIcon";
import Grid from "@material-ui/core/Grid";

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes



class StatusHistory extends Component{
    componentDidMount() {
        this.props.getStatusHistory(this.props.token,this.props.user_id);
    }

    constructor(props){
        super(props);
        this.state = {expandedRows: [],
            devicesHistory: []
        };
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        if (nextProps.devicesHistory){
            if (this.state.formElement) {
                this.state.formElement.reset();
            }

            this.setState({ devicesHistory: nextProps.devicesHistory});
        }
    }


    handleExpand = (statusHistory) =>{
        debugger;
        let newExpandedRows = [...this.state.expandedRows];
        let allExpanded = this.state.allExpanded;
        let idxFound = newExpandedRows.findIndex((id)=>{
            return id === statusHistory.id;
        });

        if(idxFound > -1){
            console.log("Collapsing " + statusHistory.id + " " + idxFound);
            newExpandedRows.splice(idxFound, 1);
        }
        else{
            console.log("Expanding " + statusHistory.id);
            newExpandedRows.push(statusHistory.id);
        }

        console.log("Expanded rows");
        console.log(newExpandedRows);

        this.setState({expandedRows: [...newExpandedRows]});
    }

    isExpanded = (statusHistory)=>{
        const idx = this.state.expandedRows.find(
            (id)=>{
                return id === statusHistory.id;
            }
        );

        return idx > -1;
    }

    expandAll=(devices)=>{
        console.log("ExapndedRows: " + this.state.expandedRows.length);
        console.log("devices:      " + devices.length);
        if(this.state.expandedRows.length === devices.length){

            let newExpandedRows = [];
            this.setState({expandedRows: [...newExpandedRows]});
            console.log("Collapsing all...");
        }
        else{
            let newExpandedRows = devices.map(
                statusHistory => statusHistory.history.arduinoId
            );
            this.setState({expandedRows: [...newExpandedRows]});
            console.log("Expanding all...");
            console.log("Expanded rows " + newExpandedRows.length)
        }
    }

    getRows = (deviceHistory)=>{

        let rows = [];

        const firstRow = (
            <TableRow onClick={()=>this.handleExpand(deviceHistory)}>
                <TableCell >
                    <Button>
                        {this.isExpanded(deviceHistory) ? "-" : "+"}
                    </Button>
                </TableCell>
                <TableCell>{deviceHistory.id}</TableCell>
            </TableRow>
        )

        rows.push(firstRow);
debugger;
        if(this.isExpanded(deviceHistory)){
            const detailRow = (
                deviceHistory.history.map( (history) => {
                       return( <TableRow >
                            <TableCell colSpan="4" >
                                <br/>
                                <br/>
                                <div className="attribute">
                                    <div className="attribute-name">time used::</div>
                                    <div className="attribute-value">{history.time}</div>
                                </div>
                                <br/>
                                <div className="attribute">
                                    <div className="attribute-name">Light status:</div>
                                    <div className="attribute-value">{history.lightStatus.toString()}</div>
                                </div>
                                <br/>
                                <div className="attribute">
                                    <div className="attribute-name">Gas status:</div>
                                    <div className="attribute-value">{history.gasStatus.toString()}</div>
                                </div>
                                <br/>
                            </TableCell>
                        </TableRow>)
                    })
            );
            rows.push(detailRow);
        }

        return rows;
    }

    getTable = ()=>{
        debugger
        const devicesRow = this.state.devicesHistory.map((device)=>{
            return this.getRows(device);
        });

        return (
            <Table style={{tableLayout: 'fixed'}} className="my-table" >
                <TableBody>
                    {devicesRow}
                </TableBody>
            </Table>
        );
    }

    render(){
        const {classes} = this.props;
        return (
            <Fragment>

                <Paper className={classes.root} elevation={1}>
                    <AppBar className={classes.header} position="static" color="default">
                        <Typography>
                            Your devices history
                        </Typography>
                    </AppBar>
                    <div style={{overflow: 'auto', height: '300px'}}>
                    {this.getTable()}
                    </div>

                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(StatusHistory) ;