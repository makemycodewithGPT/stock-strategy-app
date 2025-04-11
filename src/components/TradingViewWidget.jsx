import React, { useEffect, useRef } from 'react';

const TradingViewWidget = ({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: symbol || 'SPY',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: container.current.id,
      });
    };

    container.current.innerHTML = '';
    container.current.appendChild(script);
  }, [symbol]);

  return <div id="tradingview_chart" ref={container} style={{ height: '100%', width: '100%' }} />;
};

export default TradingViewWidget;
