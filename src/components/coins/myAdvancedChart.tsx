import { AdvancedChart } from 'react-tradingview-embed';

const MyAdvancedChart = () => {
  return (
    <AdvancedChart
      widgetProps={{
        symbol: 'NASDAQ:AAPL',
        interval: '180',
        timezone: 'America/Juneau',
        theme: 'dark',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        allow_symbol_change: true,
      }}
    />
  );
};

export default MyAdvancedChart;
