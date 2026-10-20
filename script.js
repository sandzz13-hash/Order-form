// ---- 1. EDIT THESE ----
const ACCESS_KEY = "494eb307-b7bb-449a-8008-7a515657aca2"; // Web3Forms public access key
const SHOW_PRICES = false; // set to true to show prices in the dropdown
const SHIPPING_FEE = 200;        // charged outside Gauteng
const FREE_SHIPPING_FROM = 2500; // orders at or above this ship free
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxn0OTWva_l8RrcMXAjQlP3ENVwrX-LVlr2h4Q9f1nKAUwHQLWn6DBTkxagcz11AcwV/exec"; // paste your Google Apps Script web app URL here (leave empty to skip saving to the sheet)
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

const form = document.getElementById("orderForm");
const lines = document.getElementById("lines");
const provinceEl = document.getElementById("province");
const shipNote = document.getElementById("shipNote");
const courierBox = document.getElementById("courierBox");
const courierFields = courierBox.querySelectorAll("input, textarea");
const copyEmail = document.getElementById("copyEmail");
const copyWrap = document.getElementById("copyWrap");
const sendCopy = document.getElementById("sendCopy");
const headEls = document.querySelectorAll("main > .logo, main > h1, main > .sub");
const quoteEl = document.getElementById("quote");

const money = n => "R" + n.toLocaleString("en-ZA");

// e.g. ORD-20261016-4821
function makeOrderRef() {
  const d = new Date();
  const ymd = d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
  return "ORD-" + ymd + "-" + Math.floor(1000 + Math.random() * 9000);
}

// Reads the product lines on the form (ignores empty or zero-quantity lines)
function getOrderLines() {
  return [...lines.children].map(r => {
    const p = getRowProduct(r);
    const code = p ? p.code : "";
    const qty = parseInt(r.querySelector('input[type="number"]').value, 10) || 0;
    return { code, qty, p };
  }).filter(l => l.p && l.qty > 0);
}

function calcTotals() {
  const subtotal = getOrderLines().reduce((sum, l) => sum + l.p.price * l.qty, 0);
  const province = provinceEl.value;
  const shipping = (province && province !== "Gauteng" && subtotal < FREE_SHIPPING_FROM) ? SHIPPING_FEE : 0;
  return { subtotal, shipping, total: subtotal + shipping, province };
}

function updateNote() {
  const { subtotal, shipping, total, province } = calcTotals();

  // Running total
  document.getElementById("subtotal").textContent = money(subtotal);
  document.getElementById("shipping").textContent = shipping ? money(shipping) : "Free";
  document.getElementById("total").textContent = money(total);

  // "Send me a copy" only appears once an email has been typed
  const hasEmail = copyEmail.value.trim() !== "";
  copyWrap.hidden = !hasEmail;
  if (!hasEmail) sendCopy.checked = false;

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
form.addEventListener("input", updateNote);
form.addEventListener("change", updateNote);

function productLabel(product) {
  return `${product.code} - ${product.name}${SHOW_PRICES ? " (R" + product.price + ")" : ""}`;
}

function getRowProduct(row) {
  const code = row.querySelector(".product-picker").dataset.selectedCode;
  return PRODUCTS.find(p => p.code === code) || null;
}

let productPickerCount = 0;

function productControl() {
  const picker = document.createElement("div");
  picker.className = "product-picker";
  const listId = `product-picker-list-${++productPickerCount}`;

  const input = document.createElement("input");
  input.type = "search";
  input.className = "product-choice";
  input.placeholder = "Search products";
  input.setAttribute("aria-label", "Search products by code or type");
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", listId);
  input.required = true;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "product-picker-toggle";
  toggle.setAttribute("aria-label", "Show all products");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = '<span aria-hidden="true">&#9662;</span>';

  const list = document.createElement("ul");
  list.className = "product-picker-list";
  list.id = listId;
  list.setAttribute("role", "listbox");
  list.hidden = true;

  const pickerStatus = document.createElement("div");
  pickerStatus.className = "product-picker-status";
  pickerStatus.setAttribute("role", "status");
  pickerStatus.setAttribute("aria-live", "polite");

  let showingAll = false;
  let activeIndex = -1;
  const setOpen = open => {
    list.hidden = !open;
    input.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-expanded", String(open));
    if (!open) {
      activeIndex = -1;
      input.removeAttribute("aria-activedescendant");
    }
  };

  const showProducts = (query = "", showAll = false) => {
    showingAll = showAll;
    activeIndex = -1;
    const normalizedQuery = query.trim().toLowerCase();
    const matches = showAll || !normalizedQuery
      ? PRODUCTS
      : PRODUCTS.filter(p => `${p.code} ${p.name}`.toLowerCase().includes(normalizedQuery));
    list.replaceChildren();
    matches.forEach((product, index) => {
      const option = document.createElement("li");
      option.className = "product-picker-option";
      option.id = `${listId}-option-${index}`;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");
      option.textContent = productLabel(product);
      option.addEventListener("mousedown", event => event.preventDefault());
      option.addEventListener("click", () => {
        input.value = productLabel(product);
        picker.dataset.selectedCode = product.code;
        input.setCustomValidity("");
        pickerStatus.textContent = "";
        setOpen(false);
        form.dispatchEvent(new Event("input", { bubbles: true }));
      });
      list.appendChild(option);
    });
    pickerStatus.textContent = matches.length
      ? `${matches.length} product${matches.length === 1 ? "" : "s"} available.`
      : "No products match your search.";
    setOpen(true);
  };

  const setActiveOption = index => {
    const options = list.querySelectorAll('[role="option"]');
    if (!options.length) return;
    activeIndex = (index + options.length) % options.length;
    options.forEach((option, optionIndex) => {
      const isActive = optionIndex === activeIndex;
      option.setAttribute("aria-selected", String(isActive));
      if (isActive) {
        input.setAttribute("aria-activedescendant", option.id);
        option.scrollIntoView({ block: "nearest" });
      }
    });
  };

  input.addEventListener("focus", () => {
    if (list.hidden) showProducts(input.value);
  });
  input.addEventListener("input", () => {
    picker.dataset.selectedCode = "";
    input.setCustomValidity("Choose a product from the suggestions.");
    showProducts(input.value);
  });
  input.addEventListener("keydown", event => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (list.hidden) showProducts(input.value);
      setActiveOption(activeIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (list.hidden) showProducts(input.value);
      setActiveOption(activeIndex < 0 ? list.children.length - 1 : activeIndex - 1);
    } else if (event.key === "Enter" && !list.hidden && activeIndex >= 0) {
      event.preventDefault();
      list.children[activeIndex].click();
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  });
  toggle.addEventListener("click", () => {
    if (list.hidden || !showingAll) {
      showProducts("", true);
      input.focus();
    } else {
      setOpen(false);
    }
  });
  picker.addEventListener("focusout", event => {
    if (!picker.contains(event.relatedTarget)) setOpen(false);
  });

  picker.append(input, toggle, list, pickerStatus);
  return picker;
}

function addLine() {
  const row = document.createElement("div");
  row.className = "row";
  const quantity = document.createElement("input");
  quantity.type = "number";
  quantity.min = "1";
  quantity.value = "1";
  quantity.setAttribute("aria-label", "Quantity");
  quantity.required = true;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "remove";
  remove.textContent = "\u00d7";
  remove.setAttribute("aria-label", "Remove product");
  row.append(productControl(), quantity, remove);
  row.querySelector(".remove").onclick = () => { if (lines.children.length > 1) { row.remove(); updateNote(); } };
  lines.appendChild(row);
}
addLine();
updateNote();
document.getElementById("addLine").onclick = addLine;

// ---- Quote ----
let lastQuote = null;

function showQuote(q) {
  lastQuote = q;
  document.getElementById("quoteHint").textContent = q.wantsCopy
    ? "Your order has been sent. Tap \"Email this to myself\" below to send yourself a copy."
    : "Your order has been sent. We will confirm with you shortly.";
  document.getElementById("quoteMeta").textContent =
    "Order " + q.orderRef + " - prepared for " + q.doctor + " on " + new Date().toLocaleDateString("en-ZA");
  document.querySelector("#quoteTable tbody").innerHTML = q.items.map(l =>
    `<tr><td>${l.code} - ${l.p.name}</td><td>${l.qty}</td><td>${money(l.p.price * l.qty)}</td></tr>`
  ).join("");
  document.getElementById("quoteTotals").innerHTML =
    `<div class="sum-row"><span>Subtotal</span><span>${money(q.totals.subtotal)}</span></div>
     <div class="sum-row"><span>Shipping</span><span>${q.totals.shipping ? money(q.totals.shipping) : "Free"}</span></div>
     <div class="sum-row total"><span>Total</span><span>${money(q.totals.total)}</span></div>`;
  headEls.forEach(el => el.hidden = true);
  form.hidden = true;
  quoteEl.hidden = false;
  window.scrollTo(0, 0);
}

document.getElementById("downloadQuote").onclick = () => window.print(); // choose "Save as PDF" in the print window

document.getElementById("emailQuote").onclick = () => {
  const q = lastQuote;
  if (!q) return;
  const body = [
    "Quote for " + q.doctor + " (order " + q.orderRef + ")",
    "",
    ...q.items.map(l => `${l.qty} x ${l.code} - ${l.p.name}: ${money(l.p.price * l.qty)}`),
    "",
    "Subtotal: " + money(q.totals.subtotal),
    "Shipping: " + (q.totals.shipping ? money(q.totals.shipping) : "Free"),
    "Total: " + money(q.totals.total)
  ].join("\n");
  location.href = "mailto:" + q.email + "?subject=" + encodeURIComponent("Your order quote") +
    "&body=" + encodeURIComponent(body);
};

document.getElementById("newOrder").onclick = () => {
  quoteEl.hidden = true;
  headEls.forEach(el => el.hidden = false);
  form.hidden = false;
  document.getElementById("status").textContent = "";
  window.scrollTo(0, 0);
};

// ---- Submit ----
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("status");
  const orderLines = getOrderLines();
  const items = orderLines.map(l => `${l.qty} x ${l.code} - ${l.p.name}`);
  const totals = calcTotals();
  const email = copyEmail.value.trim();
  const orderRef = makeOrderRef();
  const data = {
    access_key: ACCESS_KEY,
    subject: "New order " + orderRef + " from " + document.getElementById("doctor").value,
    order_ref: orderRef,
    doctor: document.getElementById("doctor").value,
    contact: document.getElementById("contact").value,
    province: provinceEl.value,
    subtotal: money(totals.subtotal),
    shipping: totals.shipping ? money(totals.shipping) : "None",
    total: money(totals.total),
    order: items.join("\n"),
    note: document.getElementById("note").value
  };
  if (totals.shipping) {
    data.courier_name = document.getElementById("courierName").value;
    data.courier_cell = document.getElementById("courierCell").value;
    data.courier_address = document.getElementById("courierAddress").value;
  }
  if (email) {
    data.doctor_email = email;
    data.replyto = email; // so replying to the order email goes to the doctor
    data.copy_requested = sendCopy.checked ? "Yes" : "No";
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

    // Also save the order to the Google Sheet (the email above is still the safety net)
    if (SHEET_URL) {
      fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          order_ref: orderRef,
          date: new Date().toISOString(),
          doctor: data.doctor,
          province: data.province,
          subtotal: totals.subtotal,
          shipping: totals.shipping,
          total: totals.total,
          lines: orderLines.map(l => ({
            code: l.code,
            type: l.p.name,
            category: l.p.name === "Implant" ? "Implant" : "Component",
            qty: l.qty,
            price: l.p.price,
            line_total: l.p.price * l.qty
          }))
        })
      }).catch(() => {});
    }

    showQuote({
      orderRef,
      doctor: data.doctor,
      email,
      wantsCopy: !!email && sendCopy.checked,
      items: orderLines,
      totals
    });
    form.reset();
    lines.innerHTML = "";
    addLine();
    updateNote();
  } catch {
    status.textContent = "The order did not send. Check your connection and try again, or call us.";
    status.className = "err";
  }
});
