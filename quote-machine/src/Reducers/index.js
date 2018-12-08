import {combineReducers} from 'redux';
import QuoteReducer from "./quote_fetch";
const rootReducer = combineReducers({   
    fetchedQuote: QuoteReducer

});

export default rootReducer;