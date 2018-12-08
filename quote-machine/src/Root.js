import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import rootReducer from "./Reducers/index";


export default ({children, initialState={}})=>{
    const store = createStore(rootReducer,
                             initialState,
                             applyMiddleware(promise) );
    
    return(
        <Provider store = {store}>
            {children}
        </Provider>
    );

}