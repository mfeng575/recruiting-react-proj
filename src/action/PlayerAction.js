import * as ActionType from './ActionType';
import PlayerApi from '../api/PlayerApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';

export const getPlayersResponse = players => ({
    type: ActionType.GET_PLAYERS_RESPONSE,
    players
});

export function getPlayersAction() {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return PlayerApi.getAllPlayers()
            .then(players => {
                dispatch(getPlayersResponse(players));
            }).catch(error => {
                throw error;
            });
    };
}

export const addNewPlayerResponse = () => ({
    type: ActionType.ADD_NEW_PLAYER_RESPONSE
});

export const updateExistingPlayerResponse = () => ({
    type: ActionType.UPDATE_EXISTING_PLAYER_RESPONSE
});

export function savePlayerAction(playerBeingAddedOrEdited) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());

        //if playerId exists, it means that the player is being edited, therefore update it.
        //if playerId doesn't exist, it must therefore be new player that is being added, therefore add it
        return PlayerApi.savePlayer(playerBeingAddedOrEdited)
            .then(() => {
                if (playerBeingAddedOrEdited.id) {
                    dispatch(updateExistingPlayerResponse());
                } else {
                    dispatch(addNewPlayerResponse());
                }
            }).then(() => {
                dispatch(getPlayersAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}

export const getPlayerResponse = playerFound => ({
    type: ActionType.GET_PLAYER_RESPONSE,
    player: playerFound
});

export function getPlayerAction(playerId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return PlayerApi.getPlayer(playerId)
            .then(player => {
                dispatch(getPlayerResponse(player));
            }).catch(error => {
                throw error;
            });
    };
}



export const deletePlayerResponse = () => ({
    type: ActionType.DELETE_PLAYER_RESPONSE
});



export function deletePlayerAction(playerId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return PlayerApi.deletePlayer(playerId)
            .then(() => {
                dispatch(deletePlayerResponse());
            }).then(() => {
                dispatch(getPlayersAction());
            }).catch(error => {
                throw error;
            });
    };
}