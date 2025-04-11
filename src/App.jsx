import React from "react";
import StockSearch from "./components/StockSearch";
import Chart from "./components/Chart";
import TradeInput from "./components/TradeInput";
import TradeTable from "./components/TradeTable";

function App() {
  return (
    <div className="app">
      <StockSearch />
      <Chart />
      <TradeInput />
      <TradeTable />
    </div>
  );
}

export default App;