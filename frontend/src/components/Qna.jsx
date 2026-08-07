import QNA from "../Data/QNA";

const Qna = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mt-3">
            Find answers to the most commonly asked questions about AgriMarket.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {QNA.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-blue-600 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                {item.question}
              </h2>

              <p className="text-gray-700 leading-7">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qna;