import React from "react";

export default function Industries() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Industries We Serve
        </h1>

        <p className="text-gray-500 mt-2">
          WhatsApp solutions for every industry
        </p>
      </div>

      {/* Industry Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Ecommerce */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">E-commerce</h2>
          <p className="text-gray-500 mt-2">
            Send order updates, offers and automate customer support.
          </p>
        </div>

        {/* Education */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="text-gray-500 mt-2">
            Manage student queries, admissions and notifications.
          </p>
        </div>

        {/* Healthcare */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Healthcare</h2>
          <p className="text-gray-500 mt-2">
            Send appointment reminders and patient updates.
          </p>
        </div>

        {/* Real Estate */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Real Estate</h2>
          <p className="text-gray-500 mt-2">
            Capture leads and share property details instantly.
          </p>
        </div>

        {/* Travel */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Travel</h2>
          <p className="text-gray-500 mt-2">
            Send booking confirmations and travel updates.
          </p>
        </div>

        {/* Finance */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Finance</h2>
          <p className="text-gray-500 mt-2">
            Send payment alerts, OTP and transaction updates.
          </p>
        </div>

      </div>

    </div>
  );
}