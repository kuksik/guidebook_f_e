import { MOVE_LEFT_BAR } from '../actionTypes';

export const moveLeftBar = (payload) => {
  return {
    payload,
    type: MOVE_LEFT_BAR
  };
};
