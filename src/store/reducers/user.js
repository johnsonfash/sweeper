/* eslint-disable linebreak-style */
import { FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from '../actions/actionTypes';

const initialState = {
  loading:'false',
  userData: [],
  error: 'false',
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        loading: 'true'
      }
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: 'done'
      }
    case FETCH_USER_DATA_FAILURE:
      return {
        loading: 'done',
        userData: [],
        error: 'true',
        errorMessage: action.payload
      }
    default:
      return state;
  }
};
