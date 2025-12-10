<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Stock & IOU Tracker (£)</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: system-ui, sans-serif;
      margin: 0;
      background: #020617;
      color: #e5e7eb;
    }
    header {
      background: #111827;
      padding: 1rem;
      text-align: center;
      font-size: 1.3rem;
      font-weight: 600;
      border-bottom: 1px solid #1f2937;
    }
    main {
      padding: 1rem;
      padding-bottom: 4.8rem;
    }
    nav {
      display: flex;
      justify-content: space-around;
      background: #030712;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.5rem 0.3rem 0.7rem;
      border-top: 1px solid #111827;
    }
    nav button {
      flex: 1;
      margin: 0 0.25rem;
      background: #020617;
      border: 1px solid #374151;
      color: #e5e7eb;
      border-radius: 999px;
      padding: 0.4rem 0.2rem;
      font-size: 0.8rem;
    }
    nav button.active {
      background: #22c55e;
      color: #022c22;
      border-color: #22c55e;
      font-weight: 600;
    }
    .screen {
      display: none;
    }
    .screen.active {
      display: block;
    }
    .card {
      background: #020617;
      border-radius: 14px;
      padding: 1rem;
      border: 1px solid #1f2937;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      margin-bottom: 1rem;
    }
    h2 {
      margin-top: 0;
      font-size: 1.2rem;
    }
    h3 {
      margin-top: 0;
      font-size: 1rem;
    }
    label {
      font-size: 0.85rem;
      display: block;
      margin-top: 0.5rem;
    }
    input, select, textarea {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.2rem;
      margin-bottom: 0.6rem;
      border-radius: 8px;
      border: 1px solid #374151;
      background: #020617;
      color: #e5e7eb;
      font-size: 0.9rem;
      box-sizing: border-box;
    }
    textarea {
      resize: vertical;
      min-height: 60px;
    }
    .primary-btn {
      background: #22c55e;
      border: none;
      color: #022c22;
      padding: 0.6rem 1rem;
      border-radius: 999px;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.9rem;
    }
    .secondary-btn {
      background: #0f172a;
      border: 1px solid #334155;
      color: #e5e7eb;
      padding: 0.3rem 0.7rem;
      border-radius: 999px;
      font-size: 0.75rem;
      cursor: pointer;
      margin: 0.1rem;
    }
    .small {
      font-size: 0.8rem;
      color: #9ca3af;
    }
    .pill {
      display: inline-block;
      font-size: 0.75rem;
      padding: 0.15rem 0.6rem;
      border-radius: 999px;
      border: 1px solid #374151;
      margin-right: 0.3rem;
      margin-bottom: 0.3rem;
    }
    .pill.paid {
      border-color: #22c55e;
      color: #bbf7d0;
    }
    .pill.iou {
      border-color: #f97316;
      color: #fed7aa;
    }
    ul {
      padding-left: 1.1rem;
      margin-top: 0.3rem;
      margin-bottom: 0;
    }
    li {
      margin-bottom: 0.25rem;
    }
    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .product-name {
      font-weight: 600;
      font-size: 1rem;
    }
    .product-grams {
      font-size: 0.85rem;
      color: #9ca3af;
    }
    .flex-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
      margin-top: 0.3rem;
    }
    .flex-row .secondary-btn {
      flex: 1 0 30%;
      text-align: center;
    }
    .badge {
      display: inline-block;
      border-radius: 999px;
      padding: 0.1rem 0.5rem;
      font-size: 0.7rem;
      border: 1px solid #374151;
      color: #e5e7eb;
      margin-left: 0.3rem;
    }
    .badge.warn {
      border-color: #f97316;
      color: #fed7aa;
    }
    .badge.ok {
      border-color: #22c55e;
      color: #bbf7d0;
    }
    canvas {
      width: 100%;
      max-width: 400px;
      height: 200px;
      border-radius: 10px;
      background: #020617;
      border: 1px solid #1f2937;
    }
    .reminder-badge {
      display: inline-block;
      padding: 0.1rem 0.5rem;
      border-radius: 999px;
      border: 1px solid #4b5563;
      font-size: 0.7rem;
      margin-left: 0.4rem;
    }
    .reminder-overdue {
      border-color: #f97316;
      color: #fed7aa;
    }
    .reminder-none {
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <header>Stock & IOU Tracker (£)</header>

  <main>
    <!-- PRODUCTS SCREEN (list + quick sale) -->
    <section id="screen-products" class="screen active">
      <div class="card">
        <h2>Products</h2>
        <div id="products-list"></div>
      </div>

      <div class="card" id="quick-sale-card">
        <h3>Quick sale</h3>

        <label>
          Product
          <select id="sale-product"></select>
        </label>

        <label>
          Weight sold (g)
          <input id="sale-weight" type="number" step="0.01" min="0" placeholder="e.g. 3.5" />
        </label>

        <div class="flex-row" id="quick-size-buttons"></div>
        <p class="small">Tap a size to fill weight.</p>

        <label>
          Amount (£)
          <input id="sale-amount" type="number" step="0.01" min="0" placeholder="e.g. 20.00" />
        </label>

        <label>
          Status
          <select id="sale-status">
            <option value="paid">Paid</option>
            <option value="iou">IOU / unpaid</option>
          </select>
        </label>

        <label>
          Client (optional for paid, REQUIRED for IOU)
          <select id="sale-client"></select>
        </label>

        <label>
          Note (optional)
          <textarea id="sale-note" placeholder="Extra details, etc."></textarea>
        </label>

        <button class="primary-btn" onclick="recordSale()">Save sale</button>
        <p class="small" id="sale-message"></p>
      </div>
    </section>

    <!-- ADD PRODUCT SCREEN -->
    <section id="screen-add" class="screen">
      <div class="card">
        <h2>Add / Update product</h2>
        <label>
          Product name
          <input id="prod-name" placeholder="e.g. Blue Dream, Item A" />
        </label>
        <label>
          Starting weight (g)
          <input id="prod-start-weight" type="number" step="0.01" min="0" placeholder="e.g. 100" />
        </label>
        <button class="primary-btn" onclick="addProduct()">Add / Update product</button>
        <p class="small">
          If you reuse an existing name, start & remaining weight will be reset to this value.
        </p>
      </div>

      <div class="card">
        <h3>Common sale sizes</h3>
        <label>
          Sale sizes in grams (comma-separated)
          <input id="sale-sizes-input" placeholder="3.5,7,14,28,63" />
        </label>
        <button class="primary-btn" onclick="saveSaleSizes()">Save sale sizes</button>
        <p class="small">
          Used for quick buttons and to show how many portions can be sold from remaining stock.
        </p>
        <p class="small" id="sale-sizes-display"></p>
      </div>
    </section>

    <!-- CLIENTS SCREEN -->
    <section id="screen-clients" class="screen">
      <div class="card">
        <h2>Add client</h2>
        <label>
          Client name
          <input id="client-name" placeholder="e.g. John, Sarah" />
        </label>
        <label>
          Note (optional)
          <textarea id="client-note" placeholder="Contact info, details, etc."></textarea>
        </label>
        <button class="primary-btn" onclick="addClient()">Add client</button>
        <p class="small">
          IOU sales linked to a client will automatically show as debt here.
        </p>
      </div>

      <div class="card">
        <h3>Clients & money owed</h3>
        <div id="clients-list"></div>
      </div>
    </section>

    <!-- HISTORY SCREEN -->
    <section id="screen-history" class="screen">
      <div class="card">
        <h2>Totals & best sellers</h2>
        <div id="totals-summary" class="small"></div>
        <canvas id="sales-chart" width="400" height="200"></canvas>
        <p class="small">
          Bars show total grams sold per product (paid + IOU).
        </p>
      </div>

      <div class="card">
        <h3>Full sales history</h3>
        <div id="all-sales-list" style="max-height: 280px; overflow-y: auto;"></div>
      </div>
    </section>
  </main>

  <nav>
    <button id="tab-products" class="active" onclick="showScreen('products')">Products</button>
    <button id="tab-add"      onclick="showScreen('add')">Add product</button>
    <button id="tab-clients"  onclick="showScreen('clients')">Clients</button>
    <button id="tab-history"  onclick="showScreen('history')">History</button>
  </nav>

  <script>
    // ---- Data structures ----
    let products = [];   // {id, name, startWeight, remainingWeight}
    let sales = [];      // {id, productId, grams, amount, status, note, date, clientId}
    let saleSizes = [];  // [3.5, 7, 14, 28, 63]
    let clients = [];    // {id, name, note, reminderDate}

    const STORAGE_PRODUCTS   = 'stockProducts_v1';
    const STORAGE_SALES      = 'stockSales_v1';
    const STORAGE_SALESIZES  = 'stockSaleSizes_v1';
    const STORAGE_CLIENTS    = 'stockClients_v1';

    function uuid() {
      return 'xxxxxx'.replace(/x/g, () =>
        (Math.random() * 36 | 0).toString(36)
      );
    }

    // ---- Load & Save ----
    function loadData() {
      try { products = JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || '[]'); }
      catch (e) { products = []; }

      try { sales = JSON.parse(localStorage.getItem(STORAGE_SALES) || '[]'); }
      catch (e) { sales = []; }

      try { saleSizes = JSON.parse(localStorage.getItem(STORAGE_SALESIZES) || '[]'); }
      catch (e) { saleSizes = []; }

      try { clients = JSON.parse(localStorage.getItem(STORAGE_CLIENTS) || '[]'); }
      catch (e) { clients = []; }

      // default sale sizes if none saved
      if (!saleSizes || !saleSizes.length) {
        saleSizes = [3.5, 7, 14, 28, 63];
        saveSaleSizesArray();
      }

      renderProducts();
      renderSaleSizes();
      populateProductSelect();
      renderQuickSizeButtons();
      populateClientSelect();
      renderClients();
      renderSalesSummary();
      renderAllSales();
    }

    function saveProducts() {
      localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(products));
    }

    function saveSales() {
      localStorage.setItem(STORAGE_SALES, JSON.stringify(sales));
    }

    function saveSaleSizesArray() {
      localStorage.setItem(STORAGE_SALESIZES, JSON.stringify(saleSizes));
    }

    function saveClients() {
      localStorage.setItem(STORAGE_CLIENTS, JSON.stringify(clients));
    }

    // ---- Navigation ----
    function showScreen(name) {
      const screens = ['products', 'add', 'clients', 'history'];
      screens.forEach(s => {
        document.getElementById('screen-' + s).classList.toggle('active', s === name);
        document.getElementById('tab-' + s).classList.toggle('active', s === name);
      });

      if (name === 'products') {
        renderProducts();
        populateProductSelect();
        renderQuickSizeButtons();
      } else if (name === 'clients') {
        renderClients();
      } else if (name === 'history') {
        renderSalesSummary();
        renderAllSales();
      } else if (name === 'add') {
        renderSaleSizes();
      }
    }

    // ---- Products ----
    function addProduct() {
      const nameInput = document.getElementById('prod-name');
      const weightInput = document.getElementById('prod-start-weight');
      const name = nameInput.value.trim();
      const startWeight = parseFloat(weightInput.value);

      if (!name || isNaN(startWeight) || startWeight < 0) {
        alert('Please enter a valid product name and starting weight.');
        return;
      }

      const existing = products.find(p => p.name.toLowerCase() === name.toLowerCase());
      if (existing) {
        existing.startWeight = startWeight;
        existing.remainingWeight = startWeight; // reset
      } else {
        products.push({
          id: uuid(),
          name,
          startWeight,
          remainingWeight: startWeight
        });
      }

      saveProducts();
      renderProducts();
      populateProductSelect();
      nameInput.value = '';
      weightInput.value = '';
    }

    function renderProducts() {
      const container = document.getElementById('products-list');
      container.innerHTML = '';

      if (!products.length) {
        const p = document.createElement('p');
        p.className = 'small';
        p.textContent = 'No products yet. Use the "Add product" tab.';
        container.appendChild(p);
        return;
      }

      products.forEach(p => {
        const div = document.createElement('div');
        div.style.borderTop = '1px solid #111827';
        div.style.paddingTop = '0.6rem';
        div.style.marginTop = '0.6rem';

        const head = document.createElement('div');
        head.className = 'product-header';

        const left = document.createElement('div');
        left.className = 'product-name';
        left.textContent = p.name;

        const right = document.createElement('div');
        right.className = 'product-grams';
        const sold = p.startWeight - p.remainingWeight;
        const soldDisplay = sold > 0 ? sold.toFixed(2) : '0.00';
        right.innerHTML =
          `Start: ${p.startWeight.toFixed(2)} g ` +
          `<span class="badge ${p.remainingWeight <= 0 ? 'warn' : 'ok'}">Remaining: ${p.remainingWeight.toFixed(2)} g</span>` +
          `<span class="badge">Sold: ${soldDisplay} g</span>`;

        head.appendChild(left);
        head.appendChild(right);
        div.appendChild(head);

        const sizesInfo = document.createElement('p');
        sizesInfo.className = 'small';
        if (!saleSizes.length) {
          sizesInfo.textContent = 'Set sale sizes on "Add product" tab.';
        } else if (p.remainingWeight <= 0) {
          sizesInfo.textContent = 'No stock remaining.';
        } else {
          let text = 'From remaining, you can sell: ';
          const parts = saleSizes.map(s => {
            const count = Math.floor(p.remainingWeight / s);
            return `${count} × ${s}g`;
          });
          text += parts.join(', ');
          sizesInfo.textContent = text;
        }
        div.appendChild(sizesInfo);

        // NEW: one-tap Sell button
        const sellBtn = document.createElement('button');
        sellBtn.className = 'secondary-btn';
        sellBtn.textContent = 'Sell this';
        sellBtn.onclick = () => chooseProductForSale(p.id);
        div.appendChild(sellBtn);

        container.appendChild(div);
      });
    }

    function populateProductSelect() {
      const select = document.getElementById('sale-product');
      select.innerHTML = '';

      if (!products.length) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = 'No products (add on Add product tab)';
        select.appendChild(opt);
        return;
      }

      products.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} (${p.remainingWeight.toFixed(2)} g left)`;
        select.appendChild(opt);
      });
    }

    // tap product → auto-select in quick sale & scroll
    function chooseProductForSale(productId) {
      showScreen('products'); // ensure on Products tab
      const select = document.getElementById('sale-product');
      if (select) select.value = productId;

      const card = document.getElementById('quick-sale-card');
      if (card && card.scrollIntoView) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      const weightInput = document.getElementById('sale-weight');
      if (weightInput) weightInput.focus();
    }

    // ---- Sale sizes ----
    function saveSaleSizes() {
      const input = document.getElementById('sale-sizes-input').value;
      const parts = input.split(',')
        .map(s => parseFloat(s.trim()))
        .filter(v => !isNaN(v) && v > 0);
      saleSizes = parts;
      saveSaleSizesArray();
      renderSaleSizes();
      renderProducts();
      renderQuickSizeButtons();
    }

    function renderSaleSizes() {
      const display = document.getElementById('sale-sizes-display');
      const input = document.getElementById('sale-sizes-input');
      if (!saleSizes.length) {
        display.textContent = 'No sale sizes set yet.';
        input.value = '';
      } else {
        display.textContent = 'Current sale sizes: ' + saleSizes.join('g, ') + 'g';
        input.value = saleSizes.join(',');
      }
    }

    function renderQuickSizeButtons() {
      const container = document.getElementById('quick-size-buttons');
      container.innerHTML = '';
      if (!saleSizes.length) return;
      saleSizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'secondary-btn';
        btn.textContent = size + ' g';
        btn.onclick = () => {
          document.getElementById('sale-weight').value = size;
        };
        container.appendChild(btn);
      });
    }

    // ---- Clients ----
    function addClient() {
      const nameInput = document.getElementById('client-name');
      const noteInput = document.getElementById('client-note');
      const name = nameInput.value.trim();
      const note = noteInput.value.trim();

      if (!name) {
        alert('Enter a client name.');
        return;
      }

      clients.push({
        id: uuid(),
        name,
        note,
        reminderDate: null
      });

      saveClients();
      populateClientSelect();
      renderClients();
      nameInput.value = '';
      noteInput.value = '';
    }

    function populateClientSelect() {
      const select = document.getElementById('sale-client');
      select.innerHTML = '';

      const optNone = document.createElement('option');
      optNone.value = '';
      optNone.textContent = 'No client / cash sale';
      select.appendChild(optNone);

      clients.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        select.appendChild(opt);
      });
    }

    function clientNameById(id) {
      if (!id) return 'No client';
      const c = clients.find(c => c.id === id);
      return c ? c.name : 'Unknown client';
    }

    function debtForClient(clientId) {
      let total = 0;
      sales.forEach(sale => {
        if (sale.status === 'iou' && sale.clientId === clientId && sale.amount != null) {
          total += sale.amount;
        }
      });
      return total;
    }

    function setClientReminder(clientId, dateStr) {
      const c = clients.find(c => c.id === clientId);
      if (!c) return;
      c.reminderDate = dateStr || null;
      saveClients();
      renderClients();
    }

    function renderClients() {
      const container = document.getElementById('clients-list');
      container.innerHTML = '';

      if (!clients.length) {
        const p = document.createElement('p');
        p.className = 'small';
        p.textContent = 'No clients yet. Add one above.';
        container.appendChild(p);
        return;
      }

      const today = new Date();

      clients.forEach(c => {
        const div = document.createElement('div');
        div.style.borderTop = '1px solid #111827';
        div.style.paddingTop = '0.6rem';
        div.style.marginTop = '0.6rem';

        const title = document.createElement('div');
        title.innerHTML = `<strong>${c.name}</strong>`;
        div.appendChild(title);

        const debt = debtForClient(c.id);
        const info = document.createElement('div');
        info.className = 'small';
        info.innerHTML = `Total owed: <strong>£${debt.toFixed(2)}</strong>`;

        const note = document.createElement('div');
        note.className = 'small';
        if (c.note) {
          note.textContent = `Note: ${c.note}`;
        }

        const reminderRow = document.createElement('div');
        reminderRow.className = 'small';
        reminderRow.style.marginTop = '0.4rem';

        const label = document.createElement('span');
        label.textContent = 'Reminder date: ';

        const input = document.createElement('input');
        input.type = 'date';
        input.value = c.reminderDate || '';
        input.style.width = 'auto';
        input.style.display = 'inline-block';
        input.style.marginBottom = '0';
        input.onchange = () => setClientReminder(c.id, input.value);

        const badge = document.createElement('span');
        badge.className = 'reminder-badge';
        if (!c.reminderDate) {
          badge.classList.add('reminder-none');
          badge.textContent = 'No reminder set';
        } else {
          const d = new Date(c.reminderDate + 'T00:00:00');
          if (!isNaN(d.getTime()) && d < today) {
            badge.classList.add('reminder-overdue');
            badge.textContent = 'Reminder overdue';
          } else {
            badge.textContent = 'Upcoming';
          }
        }

        reminderRow.appendChild(label);
        reminderRow.appendChild(input);
        reminderRow.appendChild(badge);

        div.appendChild(info);
        if (c.note) div.appendChild(note);
        div.appendChild(reminderRow);

        container.appendChild(div);
      });
    }

    // ---- Sales ----
    function recordSale() {
      const productId = document.getElementById('sale-product').value;
      const grams = parseFloat(document.getElementById('sale-weight').value);
      const amountStr = document.getElementById('sale-amount').value.trim();
      const amount = amountStr ? parseFloat(amountStr) : null;
      const status = document.getElementById('sale-status').value; // 'paid' or 'iou'
      const clientId = document.getElementById('sale-client').value || null;
      const note = document.getElementById('sale-note').value.trim();
      const messageEl = document.getElementById('sale-message');

      if (!productId || isNaN(grams) || grams <= 0) {
        alert('Select a product and enter a valid weight.');
        return;
      }

      // IOU rules: must have client + amount
      if (status === 'iou') {
        if (!clientId) {
          alert('IOU must be linked to a client. Please select a client.');
          return;
        }
        if (!amountStr || isNaN(amount) || amount <= 0) {
          alert('Enter a valid £ amount for an IOU sale so debt can be tracked.');
          return;
        }
      }

      const product = products.find(p => p.id === productId);
      if (!product) {
        alert('Product not found.');
        return;
      }

      if (product.remainingWeight < grams) {
        alert(`Not enough stock. Remaining: ${product.remainingWeight.toFixed(2)} g`);
        return;
      }

      // Deduct from stock (for both paid + IOU)
      product.remainingWeight -= grams;

      const sale = {
        id: uuid(),
        productId,
        grams,
        amount,
        status,
        note,
        date: new Date().toISOString(),
        clientId
      };
      sales.unshift(sale); // newest first

      saveProducts();
      saveSales();
      renderProducts();
      renderSalesSummary();
      renderAllSales();
      renderClients();
      populateProductSelect(); // update remaining in label

      document.getElementById('sale-weight').value = '';
      document.getElementById('sale-amount').value = '';
      document.getElementById('sale-note').value = '';
      messageEl.textContent = 'Sale recorded ✔️';
      setTimeout(() => { messageEl.textContent = ''; }, 2000);
    }

    function formatDate(iso) {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return 'Unknown date';
      return d.toLocaleString();
    }

    function productNameById(id) {
      const p = products.find(p => p.id === id);
      return p ? p.name : 'Unknown product';
    }

    // ---- History / Totals / Chart ----
    function renderSalesSummary() {
      const summary = document.getElementById('totals-summary');
      let totalPaid = 0;
      let totalIOU = 0;

      sales.forEach(sale => {
        if (sale.amount != null) {
          if (sale.status === 'paid') totalPaid += sale.amount;
          else if (sale.status === 'iou') totalIOU += sale.amount;
        }
      });

      summary.innerHTML =
        `Total paid: <strong>£${totalPaid.toFixed(2)}</strong><br>` +
        `Total IOU outstanding: <strong>£${totalIOU.toFixed(2)}</strong>`;

      renderBestSellersChart();
    }

    function renderBestSellersChart() {
      const canvas = document.getElementById('sales-chart');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Aggregate grams sold per product
      const totals = {}; // productId -> grams
      sales.forEach(sale => {
        if (!totals[sale.productId]) totals[sale.productId] = 0;
        totals[sale.productId] += sale.grams;
      });

      const productIds = Object.keys(totals);
      if (!productIds.length) {
        ctx.fillStyle = '#9ca3af';
        ctx.font = '12px system-ui';
        ctx.fillText('No sales yet.', 10, 30);
        return;
      }

      const values = productIds.map(id => totals[id]);
      const maxVal = Math.max(...values) || 1;

      const paddingLeft = 30;
      const paddingBottom = 20;
      const chartWidth = canvas.width - paddingLeft - 10;
      const chartHeight = canvas.height - paddingBottom - 10;
      const barWidth = chartWidth / productIds.length * 0.6;
      const gap = chartWidth / productIds.length * 0.4;

      productIds.forEach((id, index) => {
        const value = totals[id];
        const barHeight = (value / maxVal) * chartHeight;
        const x = paddingLeft + index * (barWidth + gap);
        const y = canvas.height - paddingBottom - barHeight;

        // Bar
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(x, y, barWidth, barHeight);

        // Value label
        ctx.fillStyle = '#e5e7eb';
        ctx.font = '10px system-ui';
        ctx.fillText(value.toFixed(1) + 'g', x, y - 4);

        // Product label (shortened)
        const name = productNameById(id);
        const label = name.length > 6 ? name.slice(0, 6) + '…' : name;
        ctx.save();
        ctx.translate(x + barWidth / 2, canvas.height - 5);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(label, 0, 0);
        ctx.restore();
      });
    }

    function renderAllSales() {
      const container = document.getElementById('all-sales-list');
      container.innerHTML = '';

      if (!sales.length) {
        const p = document.createElement('p');
        p.className = 'small';
        p.textContent = 'No sales yet.';
        container.appendChild(p);
        return;
      }

      sales.forEach(sale => {
        const div = document.createElement('div');
        div.style.borderTop = '1px solid #111827';
        div.style.paddingTop = '0.4rem';
        div.style.marginTop = '0.4rem';

        const title = document.createElement('div');
        title.innerHTML =
          `<strong>${productNameById(sale.productId)}</strong> — ${sale.grams.toFixed(2)} g` +
          (sale.amount != null ? ` ( £${sale.amount.toFixed(2)} )` : '');

        const meta = document.createElement('div');
        meta.className = 'small';
        const pillClass = sale.status === 'paid' ? 'paid' : 'iou';
        const pillText = sale.status === 'paid' ? 'Paid' : 'IOU';
        meta.innerHTML =
          `<span class="pill ${pillClass}">${pillText}</span> ` +
          `${clientNameById(sale.clientId)} — ${formatDate(sale.date)}`;

        const note = document.createElement('div');
        note.className = 'small';
        if (sale.note) note.textContent = `Note: ${sale.note}`;

        div.appendChild(title);
        div.appendChild(meta);
        if (sale.note) div.appendChild(note);

        container.appendChild(div);
      });
    }

    // ---- Init ----
    loadData();
  </script>
</body>
</html>

