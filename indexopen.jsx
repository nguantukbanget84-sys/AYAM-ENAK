import { useState } from "react";

export default function SutartiChickenWebsite() {
  const [cart, setCart] = useState([]);

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

  const addToCart = (item) => setCart([...cart, item]);
  const removeItem = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    if (cart.length === 0) return alert("Keranjang kosong!");

    const pesan = cart.map(item => item.name).join(", ");
    const text = `Bu Tarti, Saya temanya mas Wawan mau pesan ${pesan}`;
    window.open(`https://wa.me/6289524906709?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 p-4">

      {/* HERO */}
      <div className="text-center mb-8 bg-yellow-600 text-white p-6 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold">🍗 SUTARTI CHICKEN</h1>
        <p>Masakan Ayam Lezat & Terjangkau</p>
        <p className="text-sm">🚚 Free Ongkir Area Solo Utara</p>
      </div>

      {/* CART */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 max-w-xl mx-auto">
        <h2 className="font-bold mb-2">🛒 Keranjang</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Kosong</p>
        ) : (
          <>
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>{item.name}</span>
                <button onClick={() => removeItem(i)}>❌</button>
              </div>
            ))}
            <p className="font-bold mt-2">Total: Rp{total.toLocaleString()}</p>
          </>
        )}

        <div className="flex gap-2 mt-3">
          <button onClick={checkout} className="bg-green-600 text-white px-3 py-2 rounded w-full">Checkout</button>
          <button onClick={clearCart} className="border px-3 py-2 rounded w-full">Reset</button>
        </div>
      </div>

      {/* MENU */}
      <div className="grid md:grid-cols-3 gap-4">
        {menu.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold">{item.name}</h3>
            <p>Rp{item.price.toLocaleString()}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded w-full"
            >
              + Keranjang
            </button>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <div className="mt-10 text-center max-w-xl mx-auto">
        <h2 className="text-xl font-bold">Tentang Kami</h2>
        <p className="text-gray-600">
          SUTARTI CHICKEN menyediakan ayam lezat dengan harga terjangkau.
        </p>
      </div>

    </div>
  );
}
