import axios from "axios";
import { SINGLE_OLD_CARS_ERROR, SINGLE_OLD_CARS_REQUEST, SINGLE_OLD_CARS_SUCCESS } from "./singleOdlCar.types";

export const getSingleOldCarSpecs = (url) => async (dispatch) => {
  dispatch({
    type: SINGLE_OLD_CARS_REQUEST,
  });
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const { data } = await axios.get(url, config);
    console.log(data);
    return dispatch({
      type: SINGLE_OLD_CARS_SUCCESS,
      payload: data,
    });
  } catch ({
    response: {
      data: { message },
    },
  }) {
    console.log(message);
    return dispatch({
      type: SINGLE_OLD_CARS_ERROR,
      payload: message,
    });
  }
};
