import {combineReducers} from 'redux';
import ClientsReducers from './clients';
import ActiveClient from './client-active';
import searchValue from './searchValue';


const allReducers = combineReducers ({
    clients: ClientsReducers,
    active: ActiveClient, 
    searchString: searchValue
});

export default allReducers;