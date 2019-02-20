import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';

const selectedPlayerReducer = (state = initialState.selectedPlayerReducer, action) => {
    switch(action.type) {

        case ActionType.GET_PLAYER_RESPONSE: {
            return {
                ...state,
                player: _.assign(action.player)
            };
        }

        default: { return state; }
    }
};

export default selectedPlayerReducer;