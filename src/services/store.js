import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import fbConfig from '../services/fbConfig/fbConfig'

const composeEnhancers = composeWithDevTools({
	realtime: true
});

export default initialState => {
    initialState = JSON.parse(window.localStorage.getItem('state')) || initialState;

    //const middleware = [thunk]

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
            reduxFirestore(fbConfig)
        )
    );

    store.subscribe(()=>{
        const state = store.getState();
        const persist = {
            cart:state.cart,
            total:state.total
        };
        window.localStorage.setItem('state',JSON.stringify(persist));
    });

    return store;

}