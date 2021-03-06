import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import shelfReducer from './shelf/reducer';
import sortReducer from './sort/reducer';
import totalReducer from './total/reducer';
import filtersReducer from './filters/reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    shelf: shelfReducer,
    cart:cartReducer,
    sort: sortReducer,
    filters: filtersReducer,
    total: totalReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})