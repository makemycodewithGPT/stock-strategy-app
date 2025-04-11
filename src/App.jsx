// src/App.jsx

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TradingViewWidget from './components/TradingViewWidget';

export default function App() {
  const [symbol, setSymbol] = useState('SPY');
  const [chartType, setChartType] = useState('1분봉');
  const [buyData, setBuyData] = useState([]);

  const handleBuy = () => {
    const time = new Date().toLocaleTimeString();
    const amount = Math.floor(Math.random() * 10000 + 1000);
    setBuyData(prev => [...prev, { time, amount }]);
  };

  return (
    <div className="min-h-screen bg-[#D8D8D8] p-4">
      <div className="flex flex-col items-center space-y-4">
        {/* 검색창 */}
        <Input
          className="w-1/2 text-center"
          placeholder="종목명을 입력하세요 (예: AAPL, TSLA, SPY 등)"
          value={symbol}
          onChange={e => setSymbol(e.target.value.toUpperCase())}
        />

        {/* 차트 종류 선택 */}
        <div className="flex space-x-2">
          {['1분봉', '시간봉', '주봉', '월봉'].map(type => (
            <Button
              key={type}
              variant={chartType === type ? 'default' : 'outline'}
              onClick={() => setChartType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* 차트 영역 */}
        <Card className="w-full max-w-6xl h-[500px] bg-white shadow-md">
          <CardContent className="h-full p-0">
            <TradingViewWidget symbol={symbol} />
          </CardContent>
        </Card>

        {/* 매수 시점/금액 입력 UI */}
        <div className="flex items-center space-x-2">
          <Button onClick={handleBuy} className="bg-green-600 hover:bg-green-700 text-white">
            매수 입력 (예시용 버튼)
          </Button>
        </div>

        {/* 기록 테이블 */}
        <div className="w-full max-w-4xl bg-white p-4 rounded shadow-md">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th>매수시점</th>
                <th>매수금액</th>
              </tr>
            </thead>
            <tbody>
              {buyData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td>{item.time}</td>
                  <td>{item.amount.toLocaleString()}원</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 전략 설정 */}
        <div className="mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <span className="text-sm">전략 사용</span>
          </label>
        </div>
      </div>
    </div>
  );
}