import {combineReducers} from 'redux';
import ClientsReducers from './clients';
import ActiveClient from './client-active';
import searchValue from './searchValue';

//states
const allReducers = combineReducers ({
    clients: ClientsReducers,
    active: ActiveClient, //active= element of array
    searchString: searchValue
});

export default allReducers;