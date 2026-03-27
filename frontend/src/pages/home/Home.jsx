import { useNavigate } from "react-router-dom";

const IconLeaf = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7 3 12c0 4 2.5 7.5 6 9l3-9 3 9c3.5-1.5 6-5 6-9 0-5-4-9-9-9z" />
  </svg>
);
const IconTruck = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);
const IconShield = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconChart = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const IconBox = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

function Home() {
  const navigate = useNavigate();

  const features = [
    { title: "Fresh Produce", desc: "Sourced directly from local farms across Sri Lanka, delivered fresh to your door.", icon: <IconLeaf /> },
    { title: "Organic Quality", desc: "Naturally grown, pesticide-free vegetables from trusted partner farms.", icon: <IconShield /> },
    { title: "Fast Delivery", desc: "Same-day and next-day delivery options available across Kandy and beyond.", icon: <IconTruck /> },
    { title: "Supply Analytics", desc: "Real-time tracking and reporting across the entire supply chain.", icon: <IconChart /> },
  ];

  const categories = [
    { name: "Fresh Fruits", count: "24 items" },
    { name: "Vegetables", count: "38 items" },
    { name: "Leafy Greens", count: "15 items" },
    { name: "Dried Fruits", count: "12 items" },
    { name: "Herbs & Spices", count: "20 items" },
    { name: "Root Vegetables", count: "18 items" },
  ];

  const products = [
    { name: "Banana", price: "LKR 80", unit: "per kg", tag: "Popular" },
    { name: "Mango", price: "LKR 250", unit: "per kg", tag: "Seasonal" },
    { name: "Carrot", price: "LKR 120", unit: "per kg", tag: "Fresh" },
    { name: "Pineapple", price: "LKR 200", unit: "each", tag: "Popular" },
    { name: "Tomato", price: "LKR 150", unit: "per kg", tag: "Fresh" },
    { name: "Dried Mango", price: "LKR 650", unit: "per pack", tag: "Premium" },
  ];

  const stats = [
    { label: "Partner Farms", value: "120+" },
    { label: "Products Available", value: "200+" },
    { label: "Orders Delivered", value: "5,000+" },
    { label: "Cities Covered", value: "8" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">L</div>
            <span className="font-bold text-gray-900 text-lg font-display">LocalGro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-500">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#categories" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </div>
          <button onClick={() => navigate("/login")} className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 border border-gray-200 px-3 py-1 rounded-full bg-white">
              Kandy, Sri Lanka
            </span>
            <h1 className="text-5xl font-bold font-display leading-tight mb-6 text-gray-900">
              Fresh Fruits &<br />Vegetables,<br />Delivered.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              LocalGro connects local farmers directly with consumers. Get the freshest produce delivered to your doorstep, while supporting Sri Lankan agriculture.
            </p>
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate("/login")} className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-colors text-sm">
                Order Now
              </button>
              <a href="#features" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Learn more →</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Banana", "Mango", "Carrot", "Tomato", "Pineapple", "Spinach", "Ginger", "Papaya"].map((name, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl px-4 py-5 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-2 h-2 bg-gray-300 rounded-full mb-3"></div>
                <p className="text-gray-900 font-semibold text-sm">{name}</p>
                <p className="text-gray-400 text-xs mt-0.5">Fresh · Local</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4">
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Why LocalGro</p>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Built for freshness</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 mb-4 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Browse</p>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">
                  <IconBox />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{cat.name}</p>
                <p className="text-xs text-gray-400 mt-1">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">This Week</p>
            <h2 className="text-3xl font-bold text-gray-900 font-display">Featured Products</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((p, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all group bg-white">
                <div className="bg-gray-50 h-24 flex items-center justify-center group-hover:bg-gray-100 transition-colors border-b border-gray-100">
                  <span className="text-3xl font-black text-gray-200 group-hover:text-gray-300 transition-colors select-none">
                    {p.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{p.tag}</span>
                  <p className="font-semibold text-gray-900 text-sm mt-1">{p.name}</p>
                  <p className="text-gray-900 font-bold text-sm mt-1">{p.price}</p>
                  <p className="text-xs text-gray-400">{p.unit}</p>
                  <button onClick={() => navigate("/login")} className="mt-3 w-full py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors">
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Our Mission</p>
            <h2 className="text-3xl font-bold font-display mb-6 text-gray-900">Empowering Sri Lankan Farmers</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              LocalGro was founded in Kandy with a simple goal — eliminate the inefficiencies in the local produce supply chain and ensure farmers get fair value for their work.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Through our platform, we manage the entire journey from farm to table, using technology to reduce waste, improve delivery speed, and build lasting relationships between farmers and consumers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">Ready to get started?</h2>
          <p className="text-gray-500 text-sm mb-6">Sign in to place orders, track deliveries, and manage your account.</p>
          <button onClick={() => navigate("/login")} className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-colors text-sm">
            Sign In to LocalGro
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white font-bold text-xs">L</div>
            <span className="font-bold text-gray-900 text-sm">LocalGro</span>
          </div>
          <p className="text-xs text-gray-400">© 2025 LocalGro. Kandy, Sri Lanka.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
