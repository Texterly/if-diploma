import userReducer from '../ducks/user/reducers';
import catalogReducer from '../ducks/products/reducers';
import goodReducer from '../ducks/getAllProducts/reducers';
import clickFilterReducer from '../ducks/clickFilter/reducers';
import preLoadReducer from '../ducks/preLoad/reducers';
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    user: userReducer,
    catalog: catalogReducer,
    goods: goodReducer,
    clickFilter: clickFilterReducer,
    loading: preLoadReducer,
});





