import React from "react";

export default function Partner() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Become an AiSensy Partner
        </h1>

        <p className="text-gray-500 mt-2">
          Earn by helping businesses grow with WhatsApp API solutions
        </p>

        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Join Partner Program
        </button>
      </div>

      {/* Partner Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Reseller */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Reseller Partner</h2>

          <p className="text-gray-500 mt-2">
            Sell WhatsApp API solutions to clients and earn commissions.
          </p>
        </div>

        {/* Agency */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Agency Partner</h2>

          <p className="text-gray-500 mt-2">
            Provide WhatsApp marketing services to your customers.
          </p>
        </div>

        {/* Technology */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Technology Partner</h2>

          <p className="text-gray-500 mt-2">
            Integrate your platform with WhatsApp API solutions.
          </p>
        </div>

      </div>

    </div>
  );
}