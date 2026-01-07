/* =====================
   GLOBAL STATE
===================== */
let selectedProfile = "";
let chart = null;
window.lastAnalysis = null;
window.lastSIP = null;

/* =====================
   PROFILE SELECTION
===================== */
function setProfile(p) {
  selectedProfile = p;

  let msg = "";
  if (p === "Student") {
    msg =
      "<b>Student Profile Selected</b><br>" +
      "Start your investment journey with learning, discipline, and controlled risk.";
  } else if (p === "Trader") {
    msg =
      "<b>Trader Profile Selected</b><br>" +
      "Focus on timing, market behaviour, and strict risk management.";
  } else {
    msg =
      "<b>Investor Profile Selected</b><br>" +
      "Build long-term wealth through patience and quality businesses.";
  }

  document.getElementById("profileInfo").innerHTML = msg;
}

/* =====================
   STOCK ANALYSIS
===================== */
function analyzeStock() {
  if (!selectedProfile) {
    alert("Please select a profile first");
    return;
  }

  const horizon = document.getElementById("timeHorizon").value;
  const risk = document.getElementById("riskLevel").value;
  const amount = Number(document.getElementById("investAmount").value);

  if (!amount || amount <= 0) {
    alert("Please enter a valid investment amount");
    return;
  }

  /* =====================
     STEP 1: PRIMARY MATCH
  ===================== */
  let candidates = STOCKS.filter(s =>
    s.risk === risk &&
    s.horizon.includes(horizon) &&
    (selectedProfile === "Investor" || amount >= s.minAmount)
  );

  /* =====================
     STEP 2: RELAX RULES (fallback)
  ===================== */
  let note = "";
  if (candidates.length === 0) {
    candidates = STOCKS.filter(s => s.risk === risk);

    note =
      "⚠️ Based on your amount, we have adjusted the selection to show the closest suitable opportunity.";
  }

  /* =====================
     STEP 3: FINAL SAFETY
  ===================== */
  if (candidates.length === 0) {
    candidates = STOCKS; // ABSOLUTE fallback
    note =
      "⚠️ Showing a general market opportunity for learning purposes.";
  }

  const stock = candidates[Math.floor(Math.random() * candidates.length)];

  /* =====================
     RISK SCORE
  ===================== */
  let base =
    risk === "Low" ? 30 :
    risk === "Medium" ? 55 : 80;

  let horizonAdj =
    horizon === "Long" ? -10 :
    horizon === "Short" ? 10 : 0;

  let amountAdj =
    amount >= 500000 ? -10 :
    amount <= 20000 ? 10 : 0;

  let riskScore = Math.min(
    95,
    Math.max(5, base + horizonAdj + amountAdj)
  );

  window.lastAnalysis = {
    stock,
    profile: selectedProfile,
    horizon,
    risk,
    amount,
    riskScore
  };

  /* =====================
     UI OUTPUT
  ===================== */
  document.getElementById("stockResult").innerHTML = `
    <b>Profile:</b> ${selectedProfile}<br>
    <b>Time Horizon:</b> ${horizon}<br>
    <b>Risk Appetite:</b> ${risk}<br>
    <b>Investment Amount:</b> ₹${amount.toLocaleString()}<br><br>

    <b>📈 Suggested Stock</b><br>
    <b>Name:</b> ${stock.name}<br>
    <b>Sector:</b> ${stock.sector}<br><br>

    <b>📊 Risk Score:</b> ${riskScore}/100
    <div class="risk-bar-bg">
      <div class="risk-bar-fill" id="riskFill"></div>
    </div>

    ${note ? `<p style="margin-top:8px;color:#c47a00;">${note}</p>` : ""}

    <hr>
    <small style="color:#666">
      ⚠️ Educational purpose only. Stock Sarthi is not a SEBI registered advisor.
    </small>
  `;

  setTimeout(() => {
    const bar = document.getElementById("riskFill");
    if (bar) {
      bar.style.width = riskScore + "%";
      bar.style.background =
        riskScore <= 35 ? "green" :
        riskScore <= 65 ? "orange" : "red";
    }
  }, 100);
}

 
/* =====================
   SIP CALCULATOR
===================== */
function calculateSIP() {
  const P = Number(document.getElementById("sipAmount").value);
  const y = Number(document.getElementById("sipYears").value);
  const r = Number(document.getElementById("sipReturn").value);

  if (!P || !y || !r) {
    alert("Please enter SIP amount, years and expected return");
    return;
  }

  const m = y * 12;
  const rate = r / 12 / 100;

  let invested = 0;
  let value = 0;
  let labels = [];
  let data = [];

  for (let i = 1; i <= m; i++) {
    invested += P;
    value = (value + P) * (1 + rate);
    labels.push(i);
    data.push(Math.round(value));
  }

  invested = Math.round(invested);
  value = Math.round(value);

  document.getElementById("sipResult").innerHTML =
    `Monthly SIP Amount: Rs. ${P}<br>` +
    `Total Invested Amount: Rs. ${invested}<br>` +
    `Expected SIP Value: Rs. ${value}`;

  window.lastSIP = { monthly: P, invested, expected: value };

  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("sipChart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "SIP Growth",
        data,
        borderWidth: 2,
        fill: false
      }]
    },
    options: { responsive: true }
  });
}

/* =====================
   PDF DOWNLOAD
===================== */
function downloadPDF() {
  if (!window.lastAnalysis) {
    alert("Please analyze stock first");
    return;
  }

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  pdf.setFontSize(16);
  pdf.text("Stock Sarthi – Investment Report", 14, 20);

  pdf.setFontSize(12);
  pdf.text(`Profile: ${window.lastAnalysis.profile}`, 14, 35);
  pdf.text(`Stock: ${window.lastAnalysis.stock.name}`, 14, 45);
  pdf.text(`Sector: ${window.lastAnalysis.stock.sector}`, 14, 55);
  pdf.text(`Risk Score: ${window.lastAnalysis.riskScore}/100`, 14, 65);

  if (window.lastSIP) {
    pdf.text("SIP Summary:", 14, 80);
    pdf.text(`Monthly SIP: Rs. ${window.lastSIP.monthly}`, 14, 90);
    pdf.text(`Total Invested: Rs. ${window.lastSIP.invested}`, 14, 100);
    pdf.text(`Expected Value: Rs. ${window.lastSIP.expected}`, 14, 110);
  }

  if (chart) {
    pdf.text("SIP Growth Graph:", 14, 125);
    const img = document.getElementById("sipChart").toDataURL("image/png");
    pdf.addImage(img, "PNG", 14, 130, 180, 55);
  }

  pdf.setFontSize(9);
  pdf.text(
    "Disclaimer:\nEducational use only. Not SEBI registered.\nDo your own research.\n\nContact: stocksarthi.official@gmail.com",
    14,
    195
  );

  pdf.save("Stock_Sarthi_Report.pdf");
}

/* =====================
   TOOLS
===================== */
function openTradingNotes() {
  const url = `${window.location.origin}/notes/trading.pdf`;
  window.open(url, "_blank");
}
function openMarketNews() {
  window.open("news.html", "_blank");
}
function openSuccess() {
  window.open("success.html", "_blank");
}
function openFutureAnalysis() {
  window.open("future.html", "_blank");
}
