/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};
export const GLobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function addTransaction(newTransaction) {
    dispatch({ type: "ADD-TRANSACTION", payload: newTransaction });
  }
  function deleteTransaction(id) {
    dispatch({ type: "DELETE-TRANSACTION", payload: id });
  }
  localStorage.setItem("transactions", JSON.stringify(state.transactions));
  return (
    <GLobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};
