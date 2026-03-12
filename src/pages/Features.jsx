import React from "react";

export default function Features() {
  return (
    <div className="bg-gray-100 py-12">

      <h1 className="text-3xl font-bold text-center mb-10">
        Our Features
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold">WhatsApp API</h2>
          <p className="text-gray-500 mt-2">
            Connect your business with WhatsApp API easily.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold">Automation</h2>
          <p className="text-gray-500 mt-2">
            Automate replies using chatbot and workflows.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold">Bulk Messaging</h2>
          <p className="text-gray-500 mt-2">
            Send messages to thousands of users instantly.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <p className="text-gray-500 mt-2">
            Track campaign performance with detailed analytics.
          </p>
        </div>

      </div>

    </div>
  );
}