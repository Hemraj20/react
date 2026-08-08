import React from "react";

const Services = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6">

        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-4xl mx-auto text-center">

          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Our Services
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-4">
            Professional Beauty
            <span className="text-blue-600"> Services</span>
          </h1>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto mt-6">
            Discover professional beauty and skincare services designed to
            help you look your best, feel confident, and enjoy a personalized
            beauty experience.
          </p>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Beauty Services Made For You
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              From personalized skincare to beauty consultations, our services
              are designed around your individual needs.
            </p>

          </div>


          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">


            {/* Service 1 */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition duration-300">

                <span className="text-3xl group-hover:text-white text-blue-600">
                  ✦
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-7">
                Skincare Consultation
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Get personalized skincare guidance based on your skin type,
                concerns, and daily routine.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>

            </div>


            {/* Service 2 */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition duration-300">

                <span className="text-3xl group-hover:text-white text-blue-600">
                  ♡
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-7">
                Beauty Consultation
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Discover beauty products and routines that match your style,
                preferences, and personal beauty goals.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>

            </div>


            {/* Service 3 */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition duration-300">

                <span className="text-3xl group-hover:text-white text-blue-600">
                  ★
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-7">
                Makeup Guidance
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Learn how to choose and use makeup products to create a
                beautiful and confident everyday look.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>

            </div>


            {/* Service 4 */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition duration-300">

                <span className="text-3xl group-hover:text-white text-blue-600">
                  ✓
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-7">
                Product Matching
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Find the right beauty and skincare products based on your
                specific needs and preferences.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>

            </div>


            {/* Service 5 */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition duration-300">

                <span className="text-3xl group-hover:text-white text-blue-600">
                  ✧
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-7">
                Beauty Routine
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Build a simple and effective beauty routine using products
                suitable for your lifestyle.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>

            </div>


            {/* Service 6 */}
            <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition duration-300">

                <span className="text-3xl group-hover:text-white text-blue-600">
                  ♥
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-7">
                Personal Care
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Explore personalized care solutions that help you maintain
                healthy-looking and beautiful skin.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Content */}
            <div>

              <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
                Why Choose Us
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mt-3">
                Beauty Care With
                <span className="text-blue-600">
                  {" "}Professional Attention
                </span>
              </h2>

              <p className="text-gray-500 leading-8 mt-6">
                We believe every customer deserves a personalized beauty
                experience. Our goal is to make your beauty journey simple,
                comfortable, and enjoyable.
              </p>

              {/* Points */}
              <div className="space-y-5 mt-8">

                <div className="flex gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white">✓</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Personalized Experience
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Recommendations based on your individual needs.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white">✓</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Quality Focused
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      We focus on reliable and carefully selected products.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white">✓</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Customer Satisfaction
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Your satisfaction and confidence come first.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Image */}
            <div className="relative">

              <div className="absolute inset-0 bg-blue-200 rounded-3xl blur-3xl opacity-30">
              </div>

              <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-blue-100">

                <img
                  src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80"
                  alt="Beauty care"
                  className="w-full h-[450px] object-cover rounded-2xl"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONSULTATION CTA ================= */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-16 md:px-16 text-center">

            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-40">
            </div>

            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-800 rounded-full blur-3xl opacity-40">
            </div>

            <div className="relative">

              <p className="text-blue-100 uppercase tracking-[0.25em] text-sm font-semibold">
                Let's Get Started
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Ready to Elevate Your Beauty?
              </h2>

              <p className="text-blue-100 max-w-2xl mx-auto mt-5 leading-7">
                Talk with our beauty team and discover the right products
                and services for your personal beauty routine.
              </p>

              <button className="mt-8 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-1">
                Book a Consultation
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;