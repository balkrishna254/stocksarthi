function evaluateFutureStock(stock) {
  let score = 0;
  const i = stock.indicators;

  if (i.trend.value === "Strong") score += 30;
  if (i.momentum.value === "Fast") score += 25;
  if (i.momentum.value === "Moderate") score += 15;
  if (i.sectorStrength.value === "Strong") score += 20;

  // RSI logic
  if (i.rsi.value >= 60 && i.rsi.value <= 70) score += 15;
  else if (i.rsi.value >= 50 && i.rsi.value < 60) score += 10;
  else if (i.rsi.value > 70) score -= 5;

  let verdict =
    score >= 80 ? "High Potential (Early Strength)" :
    score >= 60 ? "Moderate Potential" :
    "Needs Caution";

  return { score, verdict };
}
