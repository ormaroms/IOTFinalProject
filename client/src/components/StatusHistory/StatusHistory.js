import React, { Component, Fragment } from 'react';
import styles from './StatusHistory.css.js'
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import history from '../../history';
import DeleteIcon from '@material-ui/icons/Delete';
import players from "./players"

// This is the current status component
// Will get the isLit isGasLeaking arduinoID from the props! ( in the future, after the POC) *propTypes



class statusHistory extends Component{

    constructor(props){
        super(props);
        this.state = {expandedRows: []};
    }

    handleExpand = (player) =>{
        let newExpandedRows = [...this.state.expandedRows];
        let allExpanded = this.state.allExpanded;
        let idxFound = newExpandedRows.findIndex((id)=>{
            return id === player.history.arduinoId;
        });

        if(idxFound > -1){
            console.log("Collapsing " + player.history.arduinoId + " " + idxFound);
            newExpandedRows.splice(idxFound, 1);
        }
        else{
            console.log("Expanding " + player.history.arduinoId);
            newExpandedRows.push(player.history.arduinoId);
        }

        console.log("Expanded rows");
        console.log(newExpandedRows);

        this.setState({expandedRows: [...newExpandedRows]});
    }

    isExpanded = (player)=>{
        const idx = this.state.expandedRows.find(
            (id)=>{
                return id === player.history.arduinoId;
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
            <tr onClick={()=>this.handleExpand(player)}>
                <td >
                    <button>
                        {this.isExpanded(player) ? "-" : "+"}
                    </button>
                </td>
                <td>{player.history.time}</td>
                <td>{player.history.lightStatus}</td>
                <td>{player.history.gasStatus}</td>
            </tr>
        )

        rows.push(firstRow);

        if(this.isExpanded(player)){
            const detailRow = (
                <tr className="player-details">
                    <td colspan="4" className="player-details">
                        <br/>
                        <div className="attribute">
                            <div className="attribute-name">Height: </div>
                            <div className="attribute-value">{player.history.arduinoId}</div>
                        </div>
                        <br/>
                        <div className="attribute">
                            <div className="attribute-name">Weight: </div>
                            <div className="attribute-value">{player.history.arduinoId}</div>
                        </div>
                        <br/>
                        <div className="attribute">
                            <div class="attribute-name">College: </div>
                            <div className="attribute-value">{player.history.arduinoId}</div>
                        </div>
                        <br/>
                    </td>
                </tr>
            );
            rows.push(detailRow);
        }

        return rows;
    }

    getPlayerTable = ()=>{

        const playerRows = players.map((player)=>{
            return this.getRows(player);
        });

        return (
            <table className="my-table">
                <tr>
                    <th onClick={()=>this.expandAll(players)}>
                        <button >
                            {players.length === this.state.expandedRows.length ? "-" : "+"}
                        </button>
                    </th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Team</th>
                </tr>
                {playerRows}
            </table>
        );
    }

    render(){
        return (
            <div>
                {this.getPlayerTable()}
            </div>
        );
    }
}

export default statusHistory ;