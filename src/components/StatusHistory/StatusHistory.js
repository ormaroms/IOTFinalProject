import React, { Component, Fragment } from 'react';
import styles from './StatusHistory.css.js'
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, TextField} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
import DeleteIcon from '@material-ui/icons/Delete';
import players from "./players"
import Button from "@material-ui/core/es/Button/Button";
import BarChart from "@material-ui/core/SvgIcon/SvgIcon";
import Grid from "@material-ui/core/Grid";

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes



class statusHistory extends Component{
    componentDidMount() {
        this.props.getStatusHistory(this.props.token);
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


    handleExpand = (player) =>{
        debugger;
        let newExpandedRows = [...this.state.expandedRows];
        let allExpanded = this.state.allExpanded;
        let idxFound = newExpandedRows.findIndex((id)=>{
            return id === player.id;
        });

        if(idxFound > -1){
            console.log("Collapsing " + player.id + " " + idxFound);
            newExpandedRows.splice(idxFound, 1);
        }
        else{
            console.log("Expanding " + player.id);
            newExpandedRows.push(player.id);
        }

        console.log("Expanded rows");
        console.log(newExpandedRows);

        this.setState({expandedRows: [...newExpandedRows]});
    }

    isExpanded = (player)=>{
        const idx = this.state.expandedRows.find(
            (id)=>{
                return id === player.id;
            }
        );

        return idx > -1;
    }

    expandAll=(players)=>{
        console.log("ExapndedRows: " + this.state.expandedRows.length);
        console.log("Players:      " + players.length);
        if(this.state.expandedRows.length === players.length){

            let newExpandedRows = [];
            this.setState({expandedRows: [...newExpandedRows]});
            console.log("Collapsing all...");
        }
        else{
            let newExpandedRows = players.map(
                player => player.history.arduinoId
            );
            this.setState({expandedRows: [...newExpandedRows]});
            console.log("Expanding all...");
            console.log("Expanded rows " + newExpandedRows.length)
        }
    }

    getRows = (player)=>{

        let rows = [];

        const firstRow = (
            <TableRow onClick={()=>this.handleExpand(player)}>
                <TableCell >
                    <Button>
                        {this.isExpanded(player) ? "-" : "+"}
                    </Button>
                </TableCell>
                <TableCell>{player.id}</TableCell>
            </TableRow>
        )

        rows.push(firstRow);
debugger;
        if(this.isExpanded(player)){
            const detailRow = (
                player.history.map( (history) => {
                       return( <TableRow className="player-details">
                            <TableCell colSpan="4" className="player-details">
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

    getPlayerTable = ()=>{

        const playerRows = this.state.devicesHistory.map((player)=>{
            return this.getRows(player);
        });

        return (
            <Table style={{tableLayout: 'fixed'}} className="my-table" >
                    <TableHead>Device id</TableHead>
                <TableBody>
                    {playerRows}
                </TableBody>
            </Table>
        );
    }

    render(){
        return (
            <Fragment>

                <Paper  elevation={1}>
                    <AppBar position="static" color="default">

                        <Typography>
                            Your Arduions history status:
                        </Typography>
                    </AppBar>

                    <div style={{ overflow: 'auto', height: '300px' }}>
                    {this.getPlayerTable()}
                        </div>
                </Paper>
            </Fragment>
        );
    }
}

export default statusHistory ;