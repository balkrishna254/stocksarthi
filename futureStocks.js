const FUTURE_STOCKS = [
  {
    name: "Tata Motors",
    sector: "Automobile",
    risk: "High",
    indicators: {
      trend: { value: "Strong", signal: "Higher highs & higher lows" },
      momentum: { value: "Fast", signal: "Strong price acceleration" },
      rsi: { value: 62, signal: "Healthy bullish momentum (not overbought)" },
      sectorStrength: { value: "Strong", signal: "Auto sector outperforming" }
    }
  },
  {
    name: "Bharti Airtel",
    sector: "Telecom",
    risk: "Medium",
    indicators: {
      trend: { value: "Strong", signal: "Sustained uptrend" },
      momentum: { value: "Moderate", signal: "Gradual upward movement" },
      rsi: { value: 55, signal: "Neutral–bullish zone" },
      sectorStrength: { value: "Strong", signal: "Sector leadership" }
    }
  },
  {
    name: "L&T",
    sector: "Infrastructure",
    risk: "Medium",
    indicators: {
      trend: { value: "Strong", signal: "Long-term uptrend intact" },
      momentum: { value: "Moderate", signal: "Stable buying interest" },
      rsi: { value: 58, signal: "Healthy momentum" },
      sectorStrength: { value: "Strong", signal: "Infra spending cycle" }
    }
  },
  {
    name: "JSW Steel",
    sector: "Metal",
    risk: "High",
    indicators: {
      trend: { value: "Strong", signal: "Breakout from consolidation" },
      momentum: { value: "Fast", signal: "Sharp upside moves" },
      rsi: { value: 68, signal: "Strong momentum, near overbought" },
      sectorStrength: { value: "Strong", signal: "Metal cycle strength" }
    }
  },
  {
    name: "HDFC Bank",
    sector: "Banking",
    risk: "Low",
    indicators: {
      trend: { value: "Strong", signal: "Consistent long-term trend" },
      momentum: { value: "Slow", signal: "Gradual accumulation" },
      rsi: { value: 52, signal: "Balanced momentum" },
      sectorStrength: { value: "Strong", signal: "Private banking leader" }
    }
  }
];
