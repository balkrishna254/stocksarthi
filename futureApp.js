function renderFutureStocks() {
  const container = document.getElementById("futureList");
  container.innerHTML = "";

  FUTURE_STOCKS.forEach((stock, index) => {
    const result = evaluateFutureStock(stock);
    const i = stock.indicators;

    container.innerHTML += `
      <div style="margin-bottom:20px;">
        <b>${index + 1}. ${stock.name}</b><br>
        Sector: ${stock.sector} | Risk: ${stock.risk}<br><br>

        <b>Indicators Used:</b><br>
        • Trend → ${i.trend.value}
        <small>(${i.trend.signal})</small><br>

        • Momentum → ${i.momentum.value}
        <small>(${i.momentum.signal})</small><br>

        • RSI → ${i.rsi.value}
        <small>(${i.rsi.signal})</small><br>

        • Sector Strength → ${i.sectorStrength.value}
        <small>(${i.sectorStrength.signal})</small><br><br>

        <b>Future Score:</b> ${result.score}/100<br>
        <b>Verdict:</b> ${result.verdict}<br>

        <hr>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderFutureStocks);
