import React from "react";

const Contacts = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6">

        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-4xl mx-auto text-center">

          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-4">
            We'd Love to
            <span className="text-blue-600"> Hear From You</span>
          </h1>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto mt-6">
            Have a question about our products or services? Get in touch
            with our team. We're always happy to help you with your beauty
            journey.
          </p>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ================= CONTACT INFO ================= */}
            <div className="lg:col-span-2">

              <p className="text-blue-600 uppercase tracking-[0.2em] text-sm font-semibold">
                Get In Touch
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                Let's Start a
                <span className="text-blue-600"> Conversation</span>
              </h2>

              <p className="text-gray-500 leading-7 mt-5">
                Whether you need help choosing the right product, want to
                learn more about our services, or simply have a question,
                our team is here for you.
              </p>


              {/* Contact Details */}
              <div className="space-y-5 mt-8">

                {/* Email */}
                <div className="flex gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100">

                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white text-xl">
                      @
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Email Us
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      hello@beautybrand.com
                    </p>

                    <p className="text-gray-500 text-sm">
                      support@beautybrand.com
                    </p>
                  </div>

                </div>


                {/* Phone */}
                <div className="flex gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100">

                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white text-xl">
                      ☎
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Call Us
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      +977 9800000000
                    </p>

                    <p className="text-gray-500 text-sm">
                      +977 9811111111
                    </p>
                  </div>

                </div>


                {/* Location */}
                <div className="flex gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100">

                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white text-xl">
                      ⌖
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Visit Us
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Main Road, Kohalpur
                    </p>

                    <p className="text-gray-500 text-sm">
                      Banke, Nepal
                    </p>
                  </div>

                </div>

              </div>


              {/* Business Hours */}
              <div className="mt-8">

                <h3 className="font-bold text-slate-900 text-lg">
                  Business Hours
                </h3>

                <div className="mt-4 space-y-2 text-sm">

                  <div className="flex justify-between border-b border-blue-100 pb-2">
                    <span className="text-gray-500">
                      Sunday - Friday
                    </span>

                    <span className="font-semibold text-slate-900">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-blue-100 pb-2">
                    <span className="text-gray-500">
                      Saturday
                    </span>

                    <span className="font-semibold text-blue-600">
                      Closed
                    </span>
                  </div>

                </div>

              </div>

            </div>


            {/* ================= CONTACT FORM ================= */}
            <div className="lg:col-span-3">

              <div className="bg-white border border-blue-100 rounded-3xl shadow-xl p-7 md:p-10">

                <div className="mb-8">

                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Send Us a Message
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Fill out the form below and we'll get back to you soon.
                  </p>

                </div>


                <form className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3.5 rounded-xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                      />
                    </div>


                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3.5 rounded-xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                      />
                    </div>

                  </div>


                  {/* Phone */}
                  <div>

                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3.5 rounded-xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                    />

                  </div>


                  {/* Subject */}
                  <div>

                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject
                    </label>

                    <select
                      className="w-full px-4 py-3.5 rounded-xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition text-gray-600"
                    >
                      <option>Select a subject</option>
                      <option>Product Inquiry</option>
                      <option>Service Inquiry</option>
                      <option>Order Support</option>
                      <option>General Question</option>
                    </select>

                  </div>


                  {/* Message */}
                  <div>

                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Message
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full px-4 py-3.5 rounded-xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition resize-none"
                    ></textarea>

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}
      <section className="pb-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Map Placeholder */}
            <div className="h-[350px] rounded-3xl overflow-hidden border border-blue-100 shadow-lg bg-blue-50 relative">

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white text-2xl">
                      ⌖
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-5">
                    Visit Our Store
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Main Road, Kohalpur, Banke
                  </p>

                  <button className="mt-5 text-blue-600 font-semibold hover:text-blue-700">
                    Get Directions →
                  </button>

                </div>

              </div>

            </div>


            {/* Quick Contact */}
            <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">

              <p className="text-blue-100 uppercase tracking-[0.2em] text-sm font-semibold">
                Need Quick Help?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                We're Here For You
              </h2>

              <p className="text-blue-100 leading-7 mt-5">
                Our support team is ready to answer your questions and help
                you find the right beauty products for your needs.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                  Call Us
                </button>

                <button className="border border-blue-300 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                  Email Us
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="bg-slate-50 border border-blue-100 rounded-3xl py-14 px-6 text-center">

            <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
              Stay Connected
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Have Questions About Our Products?
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto mt-4 leading-7">
              Our beauty team is always ready to help you choose products
              that fit your needs and routine.
            </p>

            <button className="mt-7 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-200 transition">
              Contact Our Team
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contacts;