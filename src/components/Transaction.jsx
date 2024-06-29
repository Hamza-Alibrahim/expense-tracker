import { useContext, useState } from "react";
import { GLobalContext } from "../Context/GlobalState";

const Transaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GLobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    let newTransaction = {
      text,
      amount: +amount,
      id: Math.floor(Math.random() * 10000000000),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  }
  return (
    <div>
      <h4 className="py-2 border-b-2 border-b-gray-400 mb-5">
        Add new Transaction
      </h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          className="block my-2 p-2 border w-full placeholder:text-zinc-600 outline-none"
          id="text"
          required
          spellCheck="false"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="Enter amount..."
          className="block my-2 p-2 border w-full placeholder:text-zinc-600 outline-none"
          id="amount"
          required
          spellCheck="false"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="w-full text-center p-2 bg-purple-600 text-white hover:bg-purple-500">
          Add transaction
        </button>
      </form>
    </div>
  );
};
export default Transaction;
