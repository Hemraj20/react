import React, { useState } from "react";
import QNA from "../Data/QNA";

const Qna = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-white py-20 px-5 sm:px-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm mb-3">
            FAQ
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked
            <span className="text-blue-600"> Questions</span>
          </h1>

          <p className="text-gray-500 text-lg leading-8 mt-5">
            Find answers to common questions about our cosmetics,
            skincare, makeup, and beauty products.
          </p>

        </div>


        {/* FAQ Container */}
        <div className="space-y-4">

          {QNA.map((item, index) => (

            <div
              key={index}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "border-blue-300 shadow-lg shadow-blue-100"
                  : "border-blue-100 shadow-sm hover:shadow-md"
              }`}
            >

              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left"
              >

                <div className="flex items-center gap-4">

                  {/* Number */}
                  <div
                    className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-bold transition ${
                      activeIndex === index
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2
                    className={`text-base sm:text-lg font-semibold transition ${
                      activeIndex === index
                        ? "text-blue-600"
                        : "text-slate-900"
                    }`}
                  >
                    {item.question}
                  </h2>

                </div>


                {/* Plus / Minus */}
                <span
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-blue-600 text-white rotate-180"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>

              </button>


              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  activeIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">

                  <div className="px-6 pb-6 pl-20">

                    <div className="border-l-2 border-blue-100 pl-5">

                      <p className="text-gray-500 leading-7">
                        {item.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Bottom Contact Card */}
        <div className="mt-14 bg-blue-50 border border-blue-100 rounded-3xl p-8 text-center">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-200">
            ?
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-5">
            Still have questions?
          </h2>

          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Our beauty experts are always ready to help you choose the
            right products for your beauty and skincare routine.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
};

export default Qna;