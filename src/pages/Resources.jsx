import React from "react";

export default function Resources() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Resources
        </h1>

        <p className="text-gray-500 mt-2">
          Learn how to grow your business with WhatsApp marketing
        </p>
      </div>

      {/* Resource Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Blog */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Blog</h2>
          <p className="text-gray-500 mt-2">
            Read the latest tips and strategies for WhatsApp marketing.
          </p>
        </div>

        {/* Guides */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Guides</h2>
          <p className="text-gray-500 mt-2">
            Step-by-step guides to help you get started quickly.
          </p>
        </div>

        {/* Case Studies */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Case Studies</h2>
          <p className="text-gray-500 mt-2">
            Discover how businesses grow using WhatsApp automation.
          </p>
        </div>

        {/* Documentation */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Documentation</h2>
          <p className="text-gray-500 mt-2">
            Explore technical docs and API integration tutorials.
          </p>
        </div>

      </div>

    </div>
  );
}