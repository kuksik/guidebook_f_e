import { MOVE_LEFT_BAR } from '../actionTypes';

export const toggleTodo = state => {
  return {
    type: MOVE_LEFT_BAR,
    state
  };
};
