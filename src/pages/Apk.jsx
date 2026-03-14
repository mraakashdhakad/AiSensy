import React from "react";

export default function Apk() {
  return (
    <div className="bg-gray-100 py-20 flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-8">
        Download Our App
      </h1>

      <div className="flex gap-6">

        {/* Play Store Button */}
        <a
          href="https://play.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Visit Play Store
          </button>
        </a>

        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Visit App Store
          </button>
        </a>

      </div>

    </div>
  );
}
