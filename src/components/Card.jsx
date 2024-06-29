import { useContext } from "react";
import { GLobalContext } from "../Context/GlobalState";

/* eslint-disable react/prop-types */
const Card = (props) => {
  const { deleteTransaction } = useContext(GLobalContext);
  const styles = {
    base: "flex justify-between items-center p-3 bg-white mb-2 shadow-md border-r-4 relative",
    border: props.amount > 0 ? "border-r-green-500" : "border-r-red-500",
  };
  function handleDelete(id, text) {
    if (confirm(`Are you sure that you want to delete ${text} product?`))
      deleteTransaction(id);
  }
  return (
    <div className={styles.border + " card " + styles.base}>
      <button
        className="bg-red-500 absolute -left-8 py-1 px-2 text-white text-lg hover:bg-red-400 opacity-0 transition"
        onClick={() => handleDelete(props.id, props.text)}
      >
        <span className="block rotate-45 text-xl">+</span>
      </button>
      <div className="w-full flex justify-between">
        <span>{props.text}</span>
        <span>{props.amount > 0 ? "+" + props.amount : props.amount}</span>
      </div>
    </div>
  );
};
export default Card;
