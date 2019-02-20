import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import playersReducer from './playersReducer';
import selectedPlayerReducer from './selectedPlayerReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    playersReducer,
    selectedPlayerReducer,
    apiReducer,
    form: formReducer    
});


