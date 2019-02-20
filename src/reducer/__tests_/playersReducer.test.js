import playersReducer from '../playersReducer';
import * as PlayerAction from '../../action/PlayerAction';
import * as ActionType from '../../action/ActionType';



describe('playersReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' };

        const newState = playersReducer(initialState, action);

        const expectedState = { players: [] };

        expect(newState).toEqual(expectedState);
    });



    it(`should get all players when passed ${ActionType.GET_PLAYERS_RESPONSE}`, () => {
        const initialState = {
            players: []
        };

        const players = [{id: '1', firstName: 'A'}, {id: '2', firstName: 'B'}];

        const action = PlayerAction.getPlayersResponse(players);

        const newState = playersReducer(initialState, action);

        expect(newState.players.length).toEqual(2);
        expect(newState.players[0].id).toEqual('1');
    });    


});
