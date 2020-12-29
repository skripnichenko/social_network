import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducers.js';
import authReducer from './auth-reducer.js';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer.js';

const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form : formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;