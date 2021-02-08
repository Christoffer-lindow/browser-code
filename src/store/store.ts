import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import * as actionCreators from "./action-creators"
import thunk from "redux-thunk"
import reducers from "./reducers/index"
import { ActionType } from "./action-types";
const composeEnhancers = composeWithDevTools({actionCreators})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
        id:null,
        type: "code"
    }
})

store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
        id:null,
        type: "text"
    }
})

store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
        id:null,
        type: "code"
    }
})

store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
        id:null,
        type: "text"
    }
})