<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SUTARTI CHICKEN</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-b from-yellow-50 to-orange-100 p-4">

  <!-- HERO -->
  <div class="text-center mb-8 bg-yellow-600 text-white p-6 rounded-3xl shadow-lg">
    <h1 class="text-3xl font-bold">🍗 SUTARTI CHICKEN</h1>
    <p>Masakan Ayam Lezat & Terjangkau</p>
    <p class="text-sm">🚚 Free Ongkir Area Solo Utara</p>
  </div>

  <!-- CART -->
  <div class="bg-white p-4 rounded-xl shadow mb-6 max-w-xl mx-auto">
    <h2 class="font-bold mb-2">🛒 Keranjang</h2>
    <ul id="cart"></ul>
    <p id="total" class="font-bold mt-2"></p>

    <div class="flex gap-2 mt-3">
      <button onclick="checkout()" class="bg-green-600 text-white px-3 py-2 rounded w-full">Checkout</button>
      <button onclick="clearCart()" class="border px-3 py-2 rounded w-full">Reset</button>
    </div>
  </div>

  <!-- MENU -->
  <div id="menu" class="grid md:grid-cols-3 gap-4"></div>

  <!-- ABOUT -->
  <div class="mt-10 text-center max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
    <h2 class="text-xl font-bold">Tentang Kami</h2>
    <p class="text-gray-600">
      SUTARTI CHICKEN menyediakan ayam lezat dengan harga terjangkau.
    </p>
  </div>

  <!-- FOOTER MENARIK -->
  <footer class="mt-10 bg-yellow-600 text-white p-6 rounded-2xl text-center shadow-lg">
    <h2 class="text-xl font-bold mb-2">🔥 SUTARTI CHICKEN</h2>
    <p>Masakan rumahan rasa restoran 🍗</p>
    <p class="mt-2">📞 WhatsApp: 0895-2490-6709</p>
    <p>🚚 Free Ongkir Solo Utara</p>
    <div class="mt-3 text-sm text-yellow-200">
      © 2026 SUTARTI CHICKEN • All Rights Reserved
    </div>
  </footer>

  <script>
    const menu = [
      { name: "1 Ekor Ayam kampung utuh rica2", price: 120000 },
      { name: "2 Ekor Ayam kampung utuh rica2", price: 220000 },
      { name: "1 Ekor Ayam merah utuh rica2", price: 120000 },
      { name: "2 Ekor Ayam merah utuh rica2", price: 220000 },
      { name: "1 Ekor Ayam Boiler utuh rica2", price: 85000 },
      { name: "2 Ekor Ayam Boiler utuh rica2", price: 160000 },
      { name: "1 Ekor Ayam kampung utuh opor", price: 120000 },
      { name: "2 Ekor Ayam kampung utuh opor", price: 220000 },
      { name: "1 Ekor Ayam Boiler utuh opor", price: 85000 },
      { name: "2 Ekor Ayam Boiler utuh opor", price: 160000 },
      { name: "1 Ekor Ayam merah utuh opor", price: 120000 },
      { name: "2 Ekor Ayam merah utuh opor", price: 220000 },
    ];

    let cart = [];

    function renderMenu() {
      const el = document.getElementById("menu");
      el.innerHTML = "";
      menu.forEach((item, i) => {
        el.innerHTML += `
          <div class="bg-white p-4 rounded-xl shadow">
            <h3 class="font-bold">${item.name}</h3>
            <p>Rp${item.price.toLocaleString()}</p>
            <button onclick="addToCart(${i})" class="mt-2 bg-yellow-500 text-white px-3 py-1 rounded w-full">+ Keranjang</button>
          </div>
        `;
      });
    }

    function renderCart() {
      const el = document.getElementById("cart");
      const totalEl = document.getElementById("total");
      el.innerHTML = "";

      if (cart.length === 0) {
        el.innerHTML = "<p class='text-gray-500'>Kosong</p>";
        totalEl.innerHTML = "";
        return;
      }

      let total = 0;
      cart.forEach((item, i) => {
        total += item.price;
        el.innerHTML += `
          <li class="flex justify-between">
            ${item.name}
            <button onclick="removeItem(${i})">❌</button>
          </li>
        `;
      });

      totalEl.innerHTML = "Total: Rp" + total.toLocaleString();
    }

    function addToCart(i) {
      cart.push(menu[i]);
      renderCart();
    }

    function removeItem(i) {
      cart.splice(i, 1);
      renderCart();
    }

    function clearCart() {
      cart = [];
      renderCart();
    }

    function checkout() {
      if (cart.length === 0) return alert("Keranjang kosong!");
      const pesan = cart.map(i => i.name).join(", ");
      const text = `Bu Tarti, Saya temanya mas Wawan mau pesan ${pesan}`;
      window.open(`https://wa.me/6289524906709?text=${encodeURIComponent(text)}`);
    }

    renderMenu();
    renderCart();
  </script>

</body>
</html>
