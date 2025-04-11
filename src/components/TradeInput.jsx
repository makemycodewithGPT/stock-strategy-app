import React from "react";

function TradeInput() {
  return (
    <div className="trade-input">
      <input type="text" placeholder="매수 시점 (예: 2025-04-11 09:00)" />
      <input type="number" placeholder="매수 금액" />
      <button>입력</button>
    </div>
  );
}

export default TradeInput;