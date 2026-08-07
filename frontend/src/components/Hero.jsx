import Buttons from "./Shared/Buttons";


const Hero = () => {
  const date = new Date().toDateString();
  const handleSubmit =() =>{
    alert(`Today is ${date}`);
  }
  return (
    <section className="bg-gray-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Welcome to Our Website
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
            Build Amazing
            <span className="text-blue-600"> Digital Experiences</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            We create fast, modern, and responsive websites that help businesses
            grow and provide users with an exceptional experience.
          </p>

          <div className="mt-8 flex gap-4">
           <Buttons title = "Get Started" onClick={handleSubmit}  />
           <Buttons title = " Learn More" />
          
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-3">
                My Project
              </h2>
              <p className="text-lg">
                Professional • Modern • Responsive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;