/* eslint-disable react-refresh/only-export-components */
export default (state, action) => {
  switch (action.type) {
    case "ADD-TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE-TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
