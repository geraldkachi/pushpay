// import {
//     SET_PAYMENT,
//     SET_AMOUNT,
//     SET_CHANNEL,
//     SET_PROCESSING_FEE,
//   } from './types';
// Reducer

const SET_PAYMENT = "SET_PAYMENT";
const SET_AMOUNT = "SET_AMOUNT";
const SET_CHANNEL = "SET_CHANNEL";
const SET_PROCESSING_FEE = "SET_PROCESSING_FEE";

export const paymentReducer = (state, action) => {
  switch (action.type) {
    case SET_PAYMENT:
      return action.payload;
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case SET_CHANNEL:
      return {
        ...state,
        amount: action.payload,
      };
    case SET_PROCESSING_FEE:
      return {
        ...state,
        processingFee: action.payload,
      };
    default:
      return state;
  }
};
