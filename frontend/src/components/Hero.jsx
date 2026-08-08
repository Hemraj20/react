import React from "react";

const Home = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

        {/* Background Decorations */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Hero Content */}
            <div>

              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>

                <span className="text-sm font-semibold text-blue-600">
                  Premium Beauty Collection
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
                Discover Your
                <span className="block text-blue-600">
                  Natural Beauty
                </span>
              </h1>

              <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
                Explore premium cosmetics and skincare products carefully
                selected to enhance your beauty, confidence, and everyday
                self-care routine.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1">
                  Shop Now
                </button>

                <button className="bg-white border border-blue-200 hover:border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1">
                  Explore Products
                </button>

              </div>

              {/* Trust */}
              <div className="flex items-center gap-8 mt-10">

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    10K+
                  </h3>

                  <p className="text-sm text-gray-500">
                    Happy Customers
                  </p>
                </div>

                <div className="w-px h-10 bg-blue-200"></div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    4.9/5
                  </h3>

                  <p className="text-sm text-gray-500">
                    Customer Rating
                  </p>
                </div>

              </div>

            </div>


            {/* Hero Image */}
            <div className="relative">

              <div className="absolute inset-0 bg-blue-200 rounded-[3rem] blur-3xl opacity-40"></div>

              <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-blue-100">

                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80"
                  alt="Premium cosmetics collection"
                  className="w-full h-[550px] object-cover rounded-[2rem]"
                />

              </div>

              {/* Floating Product Card */}
              <div className="absolute -bottom-7 -left-5 md:left-0 bg-white rounded-2xl shadow-xl border border-blue-100 px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">
                      ✓
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Premium Quality
                    </p>

                    <p className="text-xs text-gray-500">
                      Beauty you can trust
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="py-16 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Benefit */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">

              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white text-xl">
                  ✓
                </span>
              </div>

              <div>
                <h3 className="font-bold">
                  Quality Products
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Carefully selected
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">

              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white text-xl">
                  ♡
                </span>
              </div>

              <div>
                <h3 className="font-bold">
                  Customer First
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Your satisfaction
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">

              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white text-xl">
                  ★
                </span>
              </div>

              <div>
                <h3 className="font-bold">
                  Premium Beauty
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Modern collection
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">

              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white text-xl">
                  ✦
                </span>
              </div>

              <div>
                <h3 className="font-bold">
                  Fast Delivery
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Quick & reliable
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="py-20 px-6 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

            <div>

              <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
                Shop By Category
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mt-3">
                Find Your Beauty Essentials
              </h2>

            </div>

            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View All →
            </button>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {/* Category 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-blue-100">

              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"
                alt="Skincare"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 to-transparent p-7 pt-20">

                <p className="text-blue-200 text-sm font-semibold">
                  BEAUTY ESSENTIALS
                </p>

                <h3 className="text-white text-2xl font-bold mt-1">
                  Skincare
                </h3>

              </div>

            </div>


            {/* Category 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-blue-100">

              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="Makeup"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 to-transparent p-7 pt-20">

                <p className="text-blue-200 text-sm font-semibold">
                  BEAUTY ESSENTIALS
                </p>

                <h3 className="text-white text-2xl font-bold mt-1">
                  Makeup
                </h3>

              </div>

            </div>


            {/* Category 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-blue-100">

              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
                alt="Beauty care"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 to-transparent p-7 pt-20">

                <p className="text-blue-200 text-sm font-semibold">
                  BEAUTY ESSENTIALS
                </p>

                <h3 className="text-white text-2xl font-bold mt-1">
                  Body Care
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED SECTION ================= */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
              Featured Collection
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              Our Best Beauty Picks
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              Discover some of our most loved products, selected to make
              your daily beauty routine simple and enjoyable.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Product */}
            <div className="group bg-white border border-blue-100 rounded-2xl overflow-hidden hover:shadow-xl transition">

              <div className="relative overflow-hidden bg-blue-50">

                <img
                  src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=80"
                  alt="Skincare product"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  NEW
                </span>

              </div>

              <div className="p-5">

                <p className="text-sm text-blue-600">
                  Skincare
                </p>

                <h3 className="font-bold text-lg mt-1">
                  Daily Glow Serum
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold text-slate-900">
                    $29.99
                  </span>

                  <button className="w-10 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                    +
                  </button>

                </div>

              </div>

            </div>


            {/* Product */}
            <div className="group bg-white border border-blue-100 rounded-2xl overflow-hidden hover:shadow-xl transition">

              <div className="relative overflow-hidden bg-blue-50">

                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80"
                  alt="Cosmetic products"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  POPULAR
                </span>

              </div>

              <div className="p-5">

                <p className="text-sm text-blue-600">
                  Makeup
                </p>

                <h3 className="font-bold text-lg mt-1">
                  Beauty Essentials
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold text-slate-900">
                    $39.99
                  </span>

                  <button className="w-10 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                    +
                  </button>

                </div>

              </div>

            </div>


            {/* Product */}
            <div className="group bg-white border border-blue-100 rounded-2xl overflow-hidden hover:shadow-xl transition">

              <div className="relative overflow-hidden bg-blue-50">

                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80"
                  alt="Face cream"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  BEST SELLER
                </span>

              </div>

              <div className="p-5">

                <p className="text-sm text-blue-600">
                  Skincare
                </p>

                <h3 className="font-bold text-lg mt-1">
                  Hydrating Cream
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold text-slate-900">
                    $24.99
                  </span>

                  <button className="w-10 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                    +
                  </button>

                </div>

              </div>

            </div>


            {/* Product */}
            <div className="group bg-white border border-blue-100 rounded-2xl overflow-hidden hover:shadow-xl transition">

              <div className="relative overflow-hidden bg-blue-50">

                <img
                  src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=700&q=80"
                  alt="Beauty care product"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-5">

                <p className="text-sm text-blue-600">
                  Body Care
                </p>

                <h3 className="font-bold text-lg mt-1">
                  Fresh Body Care
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-xl font-bold text-slate-900">
                    $19.99
                  </span>

                  <button className="w-10 h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                    +
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-16 md:px-16 text-center">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-40"></div>

            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-40"></div>

            <div className="relative">

              <p className="text-blue-100 uppercase tracking-[0.25em] text-sm font-semibold">
                Your Beauty Journey
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Feel Good. Look Good.
              </h2>

              <p className="text-blue-100 max-w-2xl mx-auto mt-5 leading-7">
                Find the products that fit your beauty routine and discover
                a collection designed with quality, confidence, and care.
              </p>

              <button className="mt-8 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold shadow-lg transition">
                Start Shopping
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;