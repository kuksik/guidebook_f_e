import { MOVE_LEFT_BAR } from '../actionTypes';

const leftBar = (state = [], action) => {
  switch (action.type) {
    case MOVE_LEFT_BAR:
      return action.state;
    default:
      return state;
  }
};

export default leftBar;
