import Header from "./components/Header";
import History from "./components/History";
import Transaction from "./components/Transaction";
import { GlobalProvider } from "./Context/GlobalState";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <div className="w-96 mx-auto my-5 p-4">
          <Header />
          <History />
          <Transaction />
        </div>
      </GlobalProvider>
    </>
  );
};
export default App;
