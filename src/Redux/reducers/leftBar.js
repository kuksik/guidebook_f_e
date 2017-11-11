import { MOVE_LEFT_BAR } from '../actionTypes';

const leftBar = (state = { leftBarVisible: false }, action) => {
  switch (action.type) {
    case MOVE_LEFT_BAR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default leftBar;
