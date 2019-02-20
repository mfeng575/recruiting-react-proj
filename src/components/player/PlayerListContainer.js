import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as playerAction from '../../action/PlayerAction';
import PlayerList from './PlayerList';

export class PlayerListContainer extends React.Component {

    constructor() {
        super();

        this.state = {selectedPlayerId: undefined};

        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.resortPlayers = this.resortPlayers.bind(this);
    }

    componentDidMount() {
        this.props.action.getPlayerAction && this.props.action.getPlayersAction()
            .catch(error => {
                toastr.error(error);
            });
    }

    handleAddPlayer() {
        this.props.history.push('/player');
    }

    handleEdit(selectedPlayerId) {
        if (selectedPlayerId) {
            this.setState({selectedPlayerId: undefined});            
            this.props.history.push(`/player/${selectedPlayerId}`);
        }        
    }

    handleDelete(selectedPlayerId) {
        if (selectedPlayerId) {
            this.setState({selectedPlayerId: undefined});                        
            this.props.action.deletePlayerAction(selectedPlayerId)
                .catch(error => {
                    toastr.error(error);
                });
        }
    }

    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedPlayerId: row.id});
        }
    }
    
    resortPlayers(players) {
        players.sort((a, b) => {
            return b['score'] === a['score'] ? (a['lastName'].localeCompare(b['lastName'])) : (b['score'] - a['score']) 
        })
    }

    render() {
        const { players } = this.props;

        if (!players) {
            return (
                <div>Loading...</div>
            );
        } else {
            this.resortPlayers(players);
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>PGA Leader Board</h1>                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" style={{float: 'right'}} role="group">
                            <button
                                type="button"                                
                                className="btn btn-primary"
                                onClick={this.handleAddPlayer}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> Add Player
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <PlayerList 
                        players={players} 
                        handleRowSelect={this.handleRowSelect} 
                        handleEdit={this.handleEdit} 
                        handleDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    players: state.playersReducer.players
});

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(playerAction, dispatch)

});

PlayerListContainer.propTypes = {
    players: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListContainer);
