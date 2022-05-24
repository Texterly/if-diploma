import {createStore} from "redux";
import {rootReducer} from "./RootReducer";

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    rootReducer,
    devtoolsExtension

)

export default store