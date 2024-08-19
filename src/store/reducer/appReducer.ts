import actionTypes from '../action/actionTypes';

const initState = {
  data: [],
};

const appReducer = (state: object = initState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;

    default:
      return state;
  }
};

export default appReducer;
