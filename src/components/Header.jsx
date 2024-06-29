import { useContext } from "react";
import { GLobalContext } from "../Context/GlobalState";

const Header = () => {
  const { transactions } = useContext(GLobalContext);
  let positive = 0,
    negative = 0,
    all = 0;
  transactions.forEach((e) => {
    e.amount > 0 ? (positive += e.amount) : (negative += -e.amount);
    all += e.amount;
  });
  return (
    <div className="mb-6">
      <h1 className="text-center text-xl font-medium">Expense Tracker</h1>
      <h2 className="mt-8 uppercase font-medium">your balance</h2>
      <h2 className="uppercase font-medium text-3xl mb-4">${all}</h2>
      <div className="balance py-5 bg-white shadow-md flex justify-center items-center bb">
        <div className="text-center uppercase">
          <h3>income</h3>
          <h3 className="text-green-500 text-xl">${positive}</h3>
        </div>
        <div className="px-8 text-3xl text-gray-400">|</div>
        <div className="text-center uppercase">
          <h3 className="text-base">expence</h3>
          <h3 className="text-red-500 text-xl">${negative}</h3>
        </div>
      </div>
    </div>
  );
};
export default Header;
