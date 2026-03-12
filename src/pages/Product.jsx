import React from "react";

export default function Product() {
  return (
    <div className="py-12 bg-gray-100">

      <h1 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

        {/* Product 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">WhatsApp API</h2>
          <p className="text-gray-500 mt-2">
            Send bulk messages and automate customer support.
          </p>

          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>

        {/* Product 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Chatbot Builder</h2>
          <p className="text-gray-500 mt-2">
            Create no-code WhatsApp chatbots easily.
          </p>

          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>

        {/* Product 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Broadcast Tool</h2>
          <p className="text-gray-500 mt-2">
            Send marketing campaigns to thousands of users.
          </p>

          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}