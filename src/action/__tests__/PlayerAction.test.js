import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as PlayerActions from '../PlayerAction';
import * as ActionType from '../ActionType';



describe('PlayerAction.test.js', () => {

    describe('getPlayersResponseAction Creator', () => {
        it(`should create action ${ActionType.GET_PLAYERS_RESPONSE}`, () => {
            const players = [{ title: 'Learn reactjs redux' }];
            const expectedAction = {
                type: ActionType.GET_PLAYERS_RESPONSE,
                players: players
            };

            const actualAction = PlayerActions.getPlayersResponse(players);

            expect(actualAction).toEqual(expectedAction);
        });
    });


    describe('addNewPlayerResponseAction Creator', () => {
        it(`should create action ${ActionType.ADD_NEW_PLAYER_RESPONSE}`, () => {
            const player = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.ADD_NEW_PLAYER_RESPONSE
            };

            const actualAction = PlayerActions.addNewPlayerResponse(player);

            expect(actualAction).toEqual(expectedAction);
        });
    });


    describe('updateExistingPlayerResponseAction Creator', () => {
        it(`should create action ${ActionType.UPDATE_EXISTING_PLAYER_RESPONSE}`, () => {
            const player = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.UPDATE_EXISTING_PLAYER_RESPONSE
            };

            const actualAction = PlayerActions.updateExistingPlayerResponse(player);

            expect(actualAction).toEqual(expectedAction);
        });
    });


    describe('getPlayerResponseAction Creator', () => {
        it(`should create action ${ActionType.GET_PLAYER_RESPONSE}`, () => {
            const player = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.GET_PLAYER_RESPONSE,
                player: player
            };

            const actualAction = PlayerActions.getPlayerResponse(player);

            expect(actualAction).toEqual(expectedAction);
        });
    });



    describe('deletePlayerResponseAction Creator', () => {
        it(`should create action ${ActionType.DELETE_PLAYER_RESPONSE}`, () => {
            const expectedAction = {
                type: ActionType.DELETE_PLAYER_RESPONSE
            };

            const actualAction = PlayerActions.deletePlayerResponse();

            expect(actualAction).toEqual(expectedAction);
        });
    });



    const thunkMiddleware = [thunk];
    const mockStore = configureMockStore(thunkMiddleware);


    describe('getPlayersAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should get all players', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.GET_PLAYERS_RESPONSE,
                    body: {
                        players: [
                            { id: 1, title: 'Java Clean Code' }
                        ]
                    }
                }
            ];

            const store = mockStore({ players: [] }, expectedActions, done);

            store.dispatch(PlayerActions.getPlayersAction())
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.GET_PLAYERS_RESPONSE);
                    done();
                });
        });

    });


    describe('savePlayerAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should update existing player', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                { type: ActionType.UPDATE_EXISTING_PLAYER_RESPONSE}
            ];

            const store = mockStore({ player: [] }, expectedActions, done);
            const player = { id: 1, title: 'Learn reactjs redux' };
            store.dispatch(PlayerActions.savePlayerAction(player))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.UPDATE_EXISTING_PLAYER_RESPONSE);
                    done();
                });
        });


        it('should add a new player', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                { type: ActionType.ADD_NEW_PLAYER_RESPONSE}
            ];

            const store = mockStore({ player: [] }, expectedActions, done);
            const player = { title: 'Learn reactjs redux' };
            store.dispatch(PlayerActions.savePlayerAction(player))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.ADD_NEW_PLAYER_RESPONSE);
                    done();
                });
        });

    });



    describe('getPlayerAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should get a specific players', (done) => {
            const findThisPlayer = { id: '1', firstName: 'Tiger' };

            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.GET_PLAYER_RESPONSE,
                    body: {
                        player: findThisPlayer
                    }
                }
            ];

            const store = mockStore({ player: {} }, expectedActions, done);
            store.dispatch(PlayerActions.getPlayerAction(1))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.GET_PLAYER_RESPONSE);
                    done();
                });
        });
    });    



    describe('deletePlayerAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should delete a specific player', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.DELETE_PLAYER_RESPONSE
                }
            ];

            const store = mockStore({ player: {} }, expectedActions, done);
            store.dispatch(PlayerActions.deletePlayerAction(1))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.DELETE_PLAYER_RESPONSE);
                    done();
                });
        });
    });    



});


