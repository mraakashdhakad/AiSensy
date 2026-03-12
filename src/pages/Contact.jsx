import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you. Send us a message.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Send Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Send Message
            </button>

          </form>

        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Contact Information
          </h2>

          <p className="text-gray-600 mb-4">
            📍 Address: New Delhi, India
          </p>

          <p className="text-gray-600 mb-4">
            📞 Phone: +91 9876543210
          </p>

          <p className="text-gray-600 mb-4">
            📧 Email: support@company.com
          </p>

          <p className="text-gray-600">
            🕒 Mon - Fri : 9AM - 6PM
          </p>

        </div>

      </div>

    </div>
  );
}