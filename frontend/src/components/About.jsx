import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm mb-3">
            About Our Brand
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Beauty Designed for
            <span className="text-blue-600"> Confidence</span>
          </h1>

          <p className="text-gray-500 mt-5 text-lg leading-8">
            Discover premium cosmetics and skincare products carefully
            selected to bring out your natural beauty and help you feel
            confident every day.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl">
            </div>

            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl">
            </div>

            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-blue-100">

              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80"
                alt="Premium cosmetics"
                className="w-full h-[480px] object-cover rounded-2xl"
              />

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-xl border border-blue-100 px-6 py-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Premium Quality
                  </h3>

                  <p className="text-sm text-gray-500">
                    Beauty you can trust
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Content */}
          <div>

            <p className="text-blue-600 font-semibold mb-3">
              OUR STORY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Your Beauty,
              <br />
              <span className="text-blue-600">
                Our Passion.
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              We believe beauty is more than just appearance. It is about
              confidence, self-care, and feeling comfortable in your own
              skin. Our cosmetics collection is created for people who
              appreciate quality, simplicity, and elegance.
            </p>

            <p className="text-gray-500 leading-7 mt-5">
              From skincare essentials to everyday beauty products, we
              carefully select products that combine modern beauty trends
              with quality and reliability.
            </p>


            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

              {/* Feature 1 */}
              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Quality Products
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Carefully selected beauty products.
                  </p>
                </div>

              </div>


              {/* Feature 2 */}
              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">
                    ♡
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Customer First
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Your satisfaction is our priority.
                  </p>
                </div>

              </div>


              {/* Feature 3 */}
              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">
                    ★
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Modern Beauty
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Inspired by modern beauty trends.
                  </p>
                </div>

              </div>


              {/* Feature 4 */}
              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">
                    ✦
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Beauty & Care
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Products made for your routine.
                  </p>
                </div>

              </div>

            </div>


            {/* Button */}
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1">
              Explore Our Collection
            </button>

          </div>

        </div>


        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24">

          <div className="bg-white border border-blue-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-blue-600">
              500+
            </h2>
            <p className="text-gray-500 mt-2">
              Beauty Products
            </p>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-blue-600">
              10K+
            </h2>
            <p className="text-gray-500 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-blue-600">
              5+
            </h2>
            <p className="text-gray-500 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-blue-600">
              4.9/5
            </h2>
            <p className="text-gray-500 mt-2">
              Customer Rating
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;