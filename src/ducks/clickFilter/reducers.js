import {handleActions} from "redux-actions";
import {clickFilter} from "./actions";

const initialState = false

const clickFilterReducer = {
    // eslint-disable-next-line no-unused-vars
    [clickFilter]: (state = initialState) => true
}

export default handleActions(clickFilterReducer, initialState)