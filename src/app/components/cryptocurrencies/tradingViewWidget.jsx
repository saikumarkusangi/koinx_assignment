"use client"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({symbol}) {
  const container = useRef();

  useEffect(
    () => {
  
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${symbol}",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(0, 0, 255, 0.06)",
          "hide_legend": true,
          "range": "ALL",
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container w-full min-h-[50vh]" ref={container}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
