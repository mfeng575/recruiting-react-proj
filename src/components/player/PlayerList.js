import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const nameFormatter = (cell, row) => {
  return `${row.lastName}, ${row.firstName}`;
};

class PlayerList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }

    operationColumn(cell, row, enumObject, rowIndex) {
        return (
            <div style={{float: 'right'}} className="btn-group" role="group">
                <button type="button" className="btn btn-warning ml-2" onClick={() => this.handleEdit(rowIndex)} >
                    <i className="fa fa-pencil" aria-hidden="true"/> Edit
                </button>
                <button type="button" className="btn btn-danger ml-2" onClick={() => this.handleDelete(rowIndex)} >
                    <i className="fa fa-trash-o" aria-hidden="true"/> Delete
                </button>
            </div>
        )
     }

    handleEdit(index) {
        this.props.handleEdit(this.props.players[index].id)       
    }

    handleDelete(index) {
        this.props.handleDelete(this.props.players[index].id)     
    }

    render() {

        return (
            <BootstrapTable data={this.props.players}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="name"
                    dataFormat={nameFormatter} 
                    dataSort={false}                    
                    columnTitle
                >
                    Name
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="score"
                    dataSort={false}
                    columnTitle
                >
                    Score
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="button" 
                    dataFormat={this.operationColumn.bind(this)} 
                >
                </TableHeaderColumn>
                             
            </BootstrapTable>
        );
    }

}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};

export default PlayerList;
