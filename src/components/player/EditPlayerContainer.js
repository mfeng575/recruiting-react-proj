import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as playerAction from '../../action/PlayerAction';
import PlayerForm from './PlayerForm'; 

export class EditPlayerContainer extends React.Component {

    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.props.action.getPlayerAction && this.props.action.getPlayerAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });
    }

    handleSave(values) {
        const player = {
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            score: values.score
        };

        this.props.action.savePlayerAction(player)
            .then(() => {
                toastr.success('Player saved');
                this.props.history.push('/leaderboard');
            }).catch(error => {
                toastr.error(error);
            });
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/leaderboard');
    }

    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit Player' : 'Add Player';

        return (
            <div className="container">
                <PlayerForm
                    heading={heading}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const playerId = ownProps.match.params.id; //from the path '/player/:id'

    if (playerId && state.selectedPlayerReducer.player && playerId === state.selectedPlayerReducer.player.id) {
        return {
            initialValues: state.selectedPlayerReducer.player
        };
    } else {
        return {
        };
    }
};

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...playerAction }, dispatch)
});


EditPlayerContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerContainer);
