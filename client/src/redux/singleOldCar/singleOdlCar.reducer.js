import {
  SINGLE_OLD_CARS_ERROR,
  SINGLE_OLD_CARS_REQUEST,
  SINGLE_OLD_CARS_SUCCESS,
} from "./singleOdlCar.types";
const initState = {
  data: {},
  totalPages: 0,
  loading: false,
  error: false,
};
export const singleOldarsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SINGLE_OLD_CARS_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    }
    case SINGLE_OLD_CARS_REQUEST: {
      return {
        ...state,
        data: {},
        loading: true,
        error: false,
      };
    }
    case SINGLE_OLD_CARS_ERROR: {
      return {
        ...state,
        data: {},
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
