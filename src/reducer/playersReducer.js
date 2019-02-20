import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';

const playersReducer = (state = initialState.playersReducer, action) => {
    switch(action.type) {
        case ActionType.GET_PLAYERS_RESPONSE: {
            // '...' spread operator clones the state
            // lodash Object assign simply clones action.players into a new array.
            // The return object is a copy of state and overwrites the state.players with a fresh clone of action.players
            return {
                ...state, 
                players: _.assign(action.players)
            };
        }


        default: { return state; }
    }
};

export default playersReducer;