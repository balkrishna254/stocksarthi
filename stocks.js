// ===============================
// BASE STOCK PROFILES (30)
// ===============================
const BASE_STOCKS = [
  { name: "Reliance Industries", sector: "Energy", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 50000, horizon: ["Medium","Long"] },
  { name: "TCS", sector: "IT", risk: "Low", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 30000, horizon: ["Long"] },
  { name: "Infosys", sector: "IT", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Strong", minAmount: 25000, horizon: ["Medium","Long"] },
  { name: "HDFC Bank", sector: "Banking", risk: "Low", trend: "Strong", momentum: "Slow", sectorStrength: "Strong", minAmount: 20000, horizon: ["Long"] },
  { name: "ICICI Bank", sector: "Banking", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 25000, horizon: ["Medium","Long"] },
  { name: "Axis Bank", sector: "Banking", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 30000, horizon: ["Medium"] },
  { name: "ITC", sector: "FMCG", risk: "Low", trend: "Strong", momentum: "Slow", sectorStrength: "Strong", minAmount: 10000, horizon: ["Long"] },
  { name: "HUL", sector: "FMCG", risk: "Low", trend: "Strong", momentum: "Slow", sectorStrength: "Strong", minAmount: 15000, horizon: ["Long"] },
  { name: "Bharti Airtel", sector: "Telecom", risk: "Medium", trend: "Strong", momentum: "Fast", sectorStrength: "Strong", minAmount: 30000, horizon: ["Medium","Long"] },
  { name: "Tata Motors", sector: "Auto", risk: "High", trend: "Strong", momentum: "Fast", sectorStrength: "Strong", minAmount: 60000, horizon: ["Short","Medium"] },

  { name: "Maruti Suzuki", sector: "Auto", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 50000, horizon: ["Medium"] },
  { name: "Mahindra & Mahindra", sector: "Auto", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 45000, horizon: ["Medium"] },
  { name: "L&T", sector: "Infrastructure", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 40000, horizon: ["Long"] },
  { name: "Adani Ports", sector: "Logistics", risk: "High", trend: "Strong", momentum: "Fast", sectorStrength: "Strong", minAmount: 70000, horizon: ["Short","Medium"] },
  { name: "NTPC", sector: "Power", risk: "Low", trend: "Neutral", momentum: "Slow", sectorStrength: "Stable", minAmount: 15000, horizon: ["Long"] },
  { name: "Power Grid", sector: "Power", risk: "Low", trend: "Neutral", momentum: "Slow", sectorStrength: "Stable", minAmount: 12000, horizon: ["Long"] },
  { name: "Sun Pharma", sector: "Pharma", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 30000, horizon: ["Medium","Long"] },
  { name: "Dr Reddy's", sector: "Pharma", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 35000, horizon: ["Medium"] },
  { name: "Cipla", sector: "Pharma", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 28000, horizon: ["Medium"] },
  { name: "Asian Paints", sector: "Consumer", risk: "Low", trend: "Strong", momentum: "Slow", sectorStrength: "Strong", minAmount: 40000, horizon: ["Long"] },

  { name: "Titan", sector: "Consumer", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 45000, horizon: ["Long"] },
  { name: "UltraTech Cement", sector: "Cement", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 50000, horizon: ["Medium"] },
  { name: "Grasim", sector: "Cement", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 45000, horizon: ["Medium"] },
  { name: "JSW Steel", sector: "Metal", risk: "High", trend: "Strong", momentum: "Fast", sectorStrength: "Strong", minAmount: 65000, horizon: ["Short"] },
  { name: "Tata Steel", sector: "Metal", risk: "High", trend: "Strong", momentum: "Fast", sectorStrength: "Strong", minAmount: 60000, horizon: ["Short"] },
  { name: "Coal India", sector: "Mining", risk: "Medium", trend: "Neutral", momentum: "Slow", sectorStrength: "Stable", minAmount: 20000, horizon: ["Medium"] },
  { name: "ONGC", sector: "Energy", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 25000, horizon: ["Medium"] },
  { name: "BPCL", sector: "Energy", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 30000, horizon: ["Medium"] },
  { name: "IOC", sector: "Energy", risk: "Medium", trend: "Neutral", momentum: "Moderate", sectorStrength: "Stable", minAmount: 28000, horizon: ["Medium"] },
  { name: "HCL Tech", sector: "IT", risk: "Medium", trend: "Strong", momentum: "Moderate", sectorStrength: "Strong", minAmount: 27000, horizon: ["Medium","Long"] }
];

// ===============================
// AUTO EXPAND TO 150 STOCKS
// ===============================
const STOCKS = [];

for (let i = 0; i < 150; i++) {
  const base = BASE_STOCKS[i % BASE_STOCKS.length];

  STOCKS.push({
    name: base.name + " #" + (Math.floor(i / BASE_STOCKS.length) + 1),
    sector: base.sector,
    risk: base.risk,
    minAmount: base.minAmount,
    horizon: base.horizon,
    trend: base.trend,
    momentum: base.momentum,
    sectorStrength: base.sectorStrength
  });
}
