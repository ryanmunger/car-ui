import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import App from './App';
import {
    Audio,
    AudioControlsBlueToothView,
    AudioControlsLibraryView,
    Talks,
    TalksControlsContactsView,
    TalksControlsMessagesView,
    AirControlsView,
    AudioControlsRadioView
} from 'views';

const store = createStore(rootReducer);

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/audio/bluetooth" />
                <Route path="audio" component={Audio}>
                    <Route path="bluetooth" component={AudioControlsBlueToothView} />
                    <Route path="radio" component={AudioControlsRadioView} />
                    <Route path="library" component={AudioControlsLibraryView} />
                </Route>
                <Route path="talks" component={Talks}>
                    <Route path="contacts" component={TalksControlsContactsView} />
                    <Route path="messages" component={TalksControlsMessagesView} />
                </Route>
                <Route path="air" component={AirControlsView} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
