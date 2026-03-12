import React from "react";

export default function Integrations() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Powerful Integrations
        </h1>

        <p className="text-gray-500 mt-2">
          Connect AiSensy with your favorite tools
        </p>
      </div>

      {/* Integration Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Shopify */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h2 className="text-xl font-semibold">Shopify</h2>
          <p className="text-gray-500 mt-2">
            Sync orders and automate WhatsApp notifications.
          </p>
        </div>

        {/* WooCommerce */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h2 className="text-xl font-semibold">WooCommerce</h2>
          <p className="text-gray-500 mt-2">
            Send order updates and customer alerts automatically.
          </p>
        </div>

        {/* Zapier */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h2 className="text-xl font-semibold">Zapier</h2>
          <p className="text-gray-500 mt-2">
            Connect AiSensy with thousands of apps easily.
          </p>
        </div>

        {/* HubSpot */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h2 className="text-xl font-semibold">HubSpot</h2>
          <p className="text-gray-500 mt-2">
            Manage leads and automate WhatsApp communication.
          </p>
        </div>

        {/* Salesforce */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h2 className="text-xl font-semibold">Salesforce</h2>
          <p className="text-gray-500 mt-2">
            Integrate CRM with WhatsApp messaging workflows.
          </p>
        </div>

        {/* Google Sheets */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h2 className="text-xl font-semibold">Google Sheets</h2>
          <p className="text-gray-500 mt-2">
            Import and manage contacts directly from sheets.
          </p>
        </div>

      </div>

    </div>
  );
}