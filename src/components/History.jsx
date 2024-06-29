import { useContext } from "react";
import { GLobalContext } from "../Context/GlobalState";
import Card from "./Card";

const History = () => {
  const { transactions } = useContext(GLobalContext);
  let arr = transactions.slice(0, 3);
  return (
    <div className="mb-6">
      <h4 className="py-2 border-b-2 border-b-gray-400 mb-5">History</h4>
      {arr.map((e) => {
        return <Card key={e.id} id={e.id} text={e.text} amount={e.amount} />;
      })}
    </div>
  );
};
export default History;
