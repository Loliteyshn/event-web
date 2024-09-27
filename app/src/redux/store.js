import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import eventsReducer from "./events-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    eventsPage: eventsReducer,
    usersPage: usersReducer
});



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(reducers, applyMiddleware(thunk));

window.__store__ = store;

export default store;