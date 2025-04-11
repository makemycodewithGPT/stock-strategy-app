import React from "react";

function TradeTable() {
  return (
    <div className="trade-table">
      <h3>매매 기록</h3>
      <table>
        <thead>
          <tr>
            <th>매수 시점</th>
            <th>매도 시점</th>
            <th>매수 금액</th>
            <th>매도 금액</th>
            <th>수익률</th>
          </tr>
        </thead>
        <tbody>
          {/* 추후 데이터로 채움 */}
        </tbody>
      </table>
    </div>
  );
}

export default TradeTable;