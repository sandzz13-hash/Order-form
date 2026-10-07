// ---- 1. EDIT THESE ----
const ACCESS_KEY = "494eb307-b7bb-449a-8008-7a515657aca2"; // Web3Forms public access key
const SHOW_PRICES = false; // set to true to show prices in the dropdown
const SHIPPING_FEE = 200;        // charged outside Gauteng
const FREE_SHIPPING_FROM = 2500; // orders at or above this ship free
const PRODUCTS = [
  { code: "R3010", name: "Implant", price: 1500 },
  { code: "R3012", name: "Implant", price: 1500 },
  { code: "R3014", name: "Implant", price: 1500 },
  { code: "R3016", name: "Implant", price: 1500 },
  { code: "R3506", name: "Implant", price: 1500 },
  { code: "R3508", name: "Implant", price: 1500 },
  { code: "R3510", name: "Implant", price: 1500 },
  { code: "R3512", name: "Implant", price: 1500 },
  { code: "R3514", name: "Implant", price: 1500 },
  { code: "R3516", name: "Implant", price: 1500 },
  { code: "R3518", name: "Implant", price: 1500 },
  { code: "R3520", name: "Implant", price: 1500 },
  { code: "R3806", name: "Implant", price: 1500 },
  { code: "R3808", name: "Implant", price: 1500 },
  { code: "R3810", name: "Implant", price: 1500 },
  { code: "R3812", name: "Implant", price: 1500 },
  { code: "R3814", name: "Implant", price: 1500 },
  { code: "R3816", name: "Implant", price: 1500 },
  { code: "R3818", name: "Implant", price: 1500 },
  { code: "R3820", name: "Implant", price: 1500 },
  { code: "R4206", name: "Implant", price: 1500 },
  { code: "R4208", name: "Implant", price: 1500 },
  { code: "R4210", name: "Implant", price: 1500 },
  { code: "R4212", name: "Implant", price: 1500 },
  { code: "R4214", name: "Implant", price: 1500 },
  { code: "R4216", name: "Implant", price: 1500 },
  { code: "R4806", name: "Implant", price: 1500 },
  { code: "R4808", name: "Implant", price: 1500 },
  { code: "R4810", name: "Implant", price: 1500 },
  { code: "R4812", name: "Implant", price: 1500 },
  { code: "R4814", name: "Implant", price: 1500 },
  { code: "R4816", name: "Implant", price: 1500 },
  { code: "R5506", name: "Implant", price: 1500 },
  { code: "R5508", name: "Implant", price: 1500 },
  { code: "R5510", name: "Implant", price: 1500 },
  { code: "R5512", name: "Implant", price: 1500 },
  { code: "R5514", name: "Implant", price: 1500 },
  { code: "R6506", name: "Implant", price: 1500 },
  { code: "R6508", name: "Implant", price: 1500 },
  { code: "R6510", name: "Implant", price: 1500 },
  { code: "R6512", name: "Implant", price: 1500 },
  { code: "R7506", name: "Implant", price: 1500 },
  { code: "R7508", name: "Implant", price: 1500 },
  { code: "R7510", name: "Implant", price: 1500 },
  { code: "R7512", name: "Implant", price: 1500 },
  { code: "GF0", name: "Healing abutment", price: 250 },
  { code: "GFN0", name: "Healing abutment", price: 250 },
  { code: "GF1", name: "Healing abutment", price: 250 },
  { code: "GF2", name: "Healing abutment", price: 250 },
  { code: "GF3", name: "Healing abutment", price: 250 },
  { code: "GF4", name: "Healing abutment", price: 250 },
  { code: "GF5", name: "Healing abutment", price: 250 },
  { code: "GF6", name: "Healing abutment", price: 250 },
  { code: "GF7", name: "Healing abutment", price: 250 },
  { code: "GFN2", name: "Healing abutment", price: 250 },
  { code: "GFN4", name: "Healing abutment", price: 250 },
  { code: "GFN6", name: "Healing abutment", price: 250 },
  { code: "GFP3", name: "Healing abutment", price: 250 },
  { code: "GFP4", name: "Healing abutment", price: 250 },
  { code: "GFP5", name: "Healing abutment", price: 250 },
  { code: "TO", name: "Lab component", price: 400 },
  { code: "TOS", name: "Lab component", price: 400 },
  { code: "TR", name: "Lab component", price: 400 },
  { code: "SPCO", name: "Lab component", price: 400 },
  { code: "SPCOIO", name: "Lab component", price: 400 },
  { code: "AN", name: "Lab component", price: 400 },
  { code: "A1", name: "Abutment", price: 800 },
  { code: "A2", name: "Abutment", price: 800 },
  { code: "A3", name: "Abutment", price: 800 },
  { code: "A4", name: "Abutment", price: 800 },
  { code: "A1A15", name: "Abutment", price: 800 },
  { code: "A2A15", name: "Abutment", price: 800 },
  { code: "A3A15", name: "Abutment", price: 800 },
  { code: "A4A15", name: "Abutment", price: 800 },
  { code: "A1A25", name: "Abutment", price: 800 },
  { code: "A2A25", name: "Abutment", price: 800 },
  { code: "A3A25", name: "Abutment", price: 800 },
  { code: "A4A25", name: "Abutment", price: 800 },
  { code: "PCO1", name: "Abutment", price: 800 },
  { code: "PCO2", name: "Abutment", price: 800 },
  { code: "PCO3", name: "Abutment", price: 800 },
  { code: "PCOR", name: "Abutment", price: 800 },
  { code: "PCO1S", name: "Abutment", price: 800 },
  { code: "PCO2S", name: "Abutment", price: 800 },
  { code: "PCO3S", name: "Abutment", price: 800 },
  { code: "PCORS", name: "Abutment", price: 800 },
  { code: "PCO", name: "Abutment", price: 800 },
  { code: "M1", name: "Abutment", price: 800 },
  { code: "M2", name: "Abutment", price: 800 },
  { code: "M3", name: "Abutment", price: 800 },
  { code: "M4", name: "Abutment", price: 800 },
  { code: "M1A15", name: "Abutment", price: 800 },
  { code: "M2A15", name: "Abutment", price: 800 },
  { code: "M3A15", name: "Abutment", price: 800 },
  { code: "M4A15", name: "Abutment", price: 800 },
  { code: "M1A30", name: "Abutment", price: 800 },
  { code: "M2A30", name: "Abutment", price: 800 },
  { code: "M3A30", name: "Abutment", price: 800 },
  { code: "M4A30", name: "Abutment", price: 800 },
  { code: "M1A45", name: "Abutment", price: 800 },
  { code: "M2A45", name: "Abutment", price: 800 },
  { code: "M3A45", name: "Abutment", price: 800 },
  { code: "M4A45", name: "Abutment", price: 800 },
  { code: "B1", name: "Abutment", price: 800 },
  { code: "B2", name: "Abutment", price: 800 },
  { code: "B3", name: "Abutment", price: 800 },
  { code: "B4", name: "Abutment", price: 800 }
];
// -----------------------

const lines = document.getElementById("lines");
const provinceEl = document.getElementById("province");
const shipNote = document.getElementById("shipNote");
const courierBox = document.getElementById("courierBox");
const courierFields = courierBox.querySelectorAll("input, textarea");

function calcTotals() {
  let subtotal = 0;
  [...lines.children].forEach(r => {
    const p = PRODUCTS.find(x => x.code === r.querySelector("select").value);
    const qty = parseInt(r.querySelector("input").value, 10) || 0;
    if (p) subtotal += p.price * qty;
  });
  const province = provinceEl.value;
  const shipping = (province && province !== "Gauteng" && subtotal < FREE_SHIPPING_FROM) ? SHIPPING_FEE : 0;
  return { subtotal, shipping, total: subtotal + shipping, province };
}

function updateNote() {
  const { shipping, province } = calcTotals();
  shipNote.className = "";

  // Courier details are only needed when a shipping fee applies
  const needsCourier = shipping > 0;
  courierBox.hidden = !needsCourier;
  courierFields.forEach(f => f.required = needsCourier);

  if (!province || province === "Gauteng") { shipNote.style.display = "none"; return; }
  shipNote.style.display = "block";
  if (shipping === 0) {
    shipNote.textContent = "Free shipping: your order is R" + FREE_SHIPPING_FROM + " or more.";
    shipNote.className = "free";
  } else {
    shipNote.textContent = "A shipping fee of R" + SHIPPING_FEE + " is added to orders outside Gauteng. Orders of R" + FREE_SHIPPING_FROM + " or more ship free.";
  }
}
document.getElementById("orderForm").addEventListener("input", updateNote);
document.getElementById("orderForm").addEventListener("change", updateNote);

function addLine() {
  const row = document.createElement("div");
  row.className = "row";
  const options = PRODUCTS.map(p =>
    `<option value="${p.code}">${p.code} - ${p.name}${SHOW_PRICES ? " (R" + p.price + ")" : ""}</option>`
  ).join("");
  row.innerHTML = `
    <select aria-label="Product" required><option value="">Select a product</option>${options}</select>
    <input type="number" min="1" value="1" aria-label="Quantity" required>
    <button type="button" class="remove" aria-label="Remove product">&times;</button>`;
  row.querySelector(".remove").onclick = () => { if (lines.children.length > 1) { row.remove(); updateNote(); } };
  lines.appendChild(row);
}
addLine();
document.getElementById("addLine").onclick = addLine;

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("status");
  const items = [...lines.children].map(r => {
    const code = r.querySelector("select").value;
    const qty = r.querySelector("input").value;
    const p = PRODUCTS.find(x => x.code === code);
    return `${qty} x ${code} - ${p ? p.name : ""}`;
  });
  const totals = calcTotals();
  const data = {
    access_key: ACCESS_KEY,
    subject: "New order from " + document.getElementById("doctor").value,
    doctor: document.getElementById("doctor").value,
    contact: document.getElementById("contact").value,
    province: provinceEl.value,
    subtotal: "R" + totals.subtotal.toLocaleString("en-ZA"),
    shipping: totals.shipping ? "R" + totals.shipping : "None",
    total: "R" + totals.total.toLocaleString("en-ZA"),
    order: items.join("\n"),
    note: document.getElementById("note").value
  };
  if (totals.shipping) {
  data.courier_name = document.getElementById("courierName").value;
  data.courier_cell = document.getElementById("courierCell").value;
  data.courier_address = document.getElementById("courierAddress").value;
}
status.textContent = "Sending...";
  status.className = "";
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (!result.success) throw new Error();
    status.textContent = "Order sent. We will confirm with you shortly.";
    status.className = "ok";
    e.target.reset();
    lines.innerHTML = "";
    addLine();
    updateNote();
  } catch {
    status.textContent = "The order did not send. Check your connection and try again, or call us.";
    status.className = "err";
  }
});
