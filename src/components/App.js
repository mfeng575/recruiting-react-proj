import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import PlayerListContainer from './player/PlayerListContainer'; // eslint-disable-line import/no-named-as-default
import EditPlayerContainer from './player/EditPlayerContainer'; // eslint-disable-line import/no-named-as-default
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default

const history = createBrowserHistory();

const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/leaderboard" component={PlayerListContainer} />
                        <Route exact path="/player" component={EditPlayerContainer} />
                        <Route path="/player/:id" component={EditPlayerContainer} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;