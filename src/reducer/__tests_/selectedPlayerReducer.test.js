import selectedPlayerReducer from '../selectedPlayerReducer';
import * as PlayerAction from '../../action/PlayerAction';
import * as ActionType from '../../action/ActionType';



describe('selectedPlayerReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' }

        const newState = selectedPlayerReducer(initialState, action);

        const expectedState = { player: undefined };

        expect(newState).toEqual(expectedState);
    });


    it(`should get a particular player when passed ${ActionType.GET_PLAYER_RESPONSE}`, () => {
        const initialState = {
            player: undefined
        };

        const player = {firstName: 'B'};

        const action = PlayerAction.getPlayerResponse(player);

        const newState = selectedPlayerReducer(initialState, action);

        expect(newState.player).toEqual(player);
    });

});
