import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  tech: 'React'
};

export default createStore(reducer, initialState);
