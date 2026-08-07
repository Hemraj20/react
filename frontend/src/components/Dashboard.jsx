import { Link } from "react-router-dom";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Users",
      value: "1,245",
      icon: "👥",
    },
    {
      title: "Products",
      value: "850",
      icon: "📦",
    },
    {
      title: "Orders",
      value: "560",
      icon: "🛒",
    },
    {
      title: "Revenue",
      value: "$12,500",
      icon: "💰",
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-5 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">
          Dashboard
        </h1>

        <ul className="space-y-4">
          <li className="hover:bg-blue-800 p-3 rounded cursor-pointer">
            Dashboard
          </li>
          <li className="hover:bg-blue-800 p-3 rounded cursor-pointer">
            Users
          </li>
          <li className="hover:bg-blue-800 p-3 rounded cursor-pointer">
            Products
          </li>
          <li className="hover:bg-blue-800 p-3 rounded cursor-pointer">
            Orders
          </li>
          <li className="hover:bg-blue-800 p-3 rounded cursor-pointer">
            Reports
          </li>
          <li className="hover:bg-lime-950 p-3 rounded cursor-pointer">
           <Link to="/">logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Navbar */}
        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Dashboard Overview
          </h2>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search..."
              className="border px-4 py-2 rounded-lg"
            />

            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">{card.title}</p>
                  <h2 className="text-3xl font-bold mt-2">
                    {card.value}
                  </h2>
                </div>

                <div className="text-4xl">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow mt-8 p-6">
          <h2 className="text-xl font-bold mb-4">
            Recent Orders
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Customer</th>
                <th className="text-left p-3">Product</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">John</td>
                <td className="p-3">Laptop</td>
                <td className="p-3 text-green-600">Completed</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Alex</td>
                <td className="p-3">Phone</td>
                <td className="p-3 text-yellow-600">Pending</td>
              </tr>

              <tr>
                <td className="p-3">David</td>
                <td className="p-3">Monitor</td>
                <td className="p-3 text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;