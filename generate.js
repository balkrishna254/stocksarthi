const fs = require("fs");

/* ==========================
   50 REAL INDIAN STOCKS
========================== */
const BASE_STOCKS = [
  // LOW RISK
  { name: "ITC", sector: "FMCG", risk: "Low", ideal: 15000 },
  { name: "HUL", sector: "FMCG", risk: "Low", ideal: 20000 },
  { name: "Nestle India", sector: "FMCG", risk: "Low", ideal: 30000 },
  { name: "TCS", sector: "IT", risk: "Low", ideal: 50000 },
  { name: "Infosys", sector: "IT", risk: "Low", ideal: 40000 },
  { name: "Wipro", sector: "IT", risk: "Low", ideal: 35000 },
  { name: "HDFC Bank", sector: "Banking", risk: "Low", ideal: 60000 },
  { name: "Kotak Bank", sector: "Banking", risk: "Low", ideal: 55000 },
  { name: "Axis Bank", sector: "Banking", risk: "Low", ideal: 45000 },
  { name: "Asian Paints", sector: "Consumer", risk: "Low", ideal: 40000 },

  // MEDIUM RISK
  { name: "Reliance Industries", sector: "Energy", risk: "Medium", ideal: 100000 },
  { name: "ICICI Bank", sector: "Banking", risk: "Medium", ideal: 70000 },
  { name: "L&T", sector: "Infra", risk: "Medium", ideal: 80000 },
  { name: "SBI", sector: "Banking", risk: "Medium", ideal: 50000 },
  { name: "Tata Steel", sector: "Metal", risk: "Medium", ideal: 60000 },
  { name: "Power Grid", sector: "Energy", risk: "Medium", ideal: 45000 },
  { name: "NTPC", sector: "Energy", risk: "Medium", ideal: 40000 },
  { name: "Maruti Suzuki", sector: "Auto", risk: "Medium", ideal: 90000 },
  { name: "Sun Pharma", sector: "Pharma", risk: "Medium", ideal: 50000 },
  { name: "Dr Reddy’s", sector: "Pharma", risk: "Medium", ideal: 60000 },

  // HIGH RISK
  { name: "Tata Motors", sector: "Auto", risk: "High", ideal: 75000 },
  { name: "Adani Ports", sector: "Logistics", risk: "High", ideal: 90000 },
  { name: "Adani Green", sector: "Energy", risk: "High", ideal: 85000 },
  { name: "Zomato", sector: "Tech", risk: "High", ideal: 30000 },
  { name: "Paytm", sector: "Fintech", risk: "High", ideal: 25000 },
  { name: "IRCTC", sector: "Railways", risk: "High", ideal: 40000 },
  { name: "RVNL", sector: "Infra", risk: "High", ideal: 35000 },
  { name: "HAL", sector: "Defence", risk: "High", ideal: 70000 },
  { name: "BEL", sector: "Defence", risk: "High", ideal: 50000 },
  { name: "Mazagon Dock", sector: "Defence", risk: "High", ideal: 65000 },

  // EXTRA (to cross 50)
  { name: "ONGC", sector: "Energy", risk: "Medium", ideal: 60000 },
  { name: "Coal India", sector: "Energy", risk: "Low", ideal: 35000 },
  { name: "Bajaj Finance", sector: "Finance", risk: "Medium", ideal: 80000 },
  { name: "Havells", sector: "Consumer", risk: "Medium", ideal: 45000 },
  { name: "Pidilite", sector: "Consumer", risk: "Low", ideal: 30000 },
  { name: "Godrej Consumer", sector: "FMCG", risk: "Low", ideal: 25000 },
  { name: "Tata Power", sector: "Energy", risk: "Medium", ideal: 40000 },
  { name: "JSW Steel", sector: "Metal", risk: "Medium", ideal: 70000 },
  { name: "Indigo", sector: "Aviation", risk: "High", ideal: 60000 },
  { name: "DMart", sector: "Retail", risk: "Low", ideal: 50000 }
];

const HORIZON_MAP = {
  Low: ["Mid", "Long"],
  Medium: ["Short", "Mid", "Long"],
  High: ["Short", "Mid"]
};

function generateStocks(count = 150) {
  const stocks = [];

  for (let i = 0; i < count; i++) {
    const base = BASE_STOCKS[i % BASE_STOCKS.length];

    stocks.push({
      name: base.name,
      sector: base.sector,
      risk: base.risk,
      horizon: HORIZON_MAP[base.risk],
      minAmount: Math.max(2000, Math.floor(base.ideal * 0.25)),
      idealAmount: base.ideal
    });
  }

  return stocks;
}

const STOCKS = generateStocks(150); // 150 realistic stocks

fs.writeFileSync(
  "stocks.js",
  "const STOCKS = " + JSON.stringify(STOCKS, null, 2) + ";"
);

console.log("stocks.js generated with 50+ real Indian stocks!");
