import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import { AudioControlsView, CallControlsView, AirControlsView } from 'views';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AudioControlsView} />
            <Route path="call" component={CallControlsView} />
            <Route path="air" component={AirControlsView} />
        </Route>
    </Router>
), document.getElementById('root'));
