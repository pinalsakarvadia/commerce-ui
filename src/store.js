import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import history from './history';
import {routerMiddleware} from 'react-router-redux';

const rMiddleware = routerMiddleware(history);

const store = createStore(
	combineReducers(reducers), 
	compose(
		applyMiddleware(thunk, rMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

export default store;