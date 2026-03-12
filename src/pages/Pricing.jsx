import React from "react";

export default function PricingPage() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          AiSensy Pricing Plans – WhatsApp API Pricing
        </h1>

        <p className="text-gray-500 mt-2">
          Monthly / Yearly Subscription | Unlimited Users Plan
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

        {/* Free Plan */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Free Forever</h2>

          <p className="text-gray-500 text-sm mt-1">
            Get Started with WhatsApp Ads & WhatsApp API
          </p>

          <h1 className="text-4xl font-bold mt-6">
            ₹0 <span className="text-sm font-normal">Forever</span>
          </h1>

          <button className="w-full border rounded-lg py-2 mt-6 hover:bg-gray-200">
            Start for FREE
          </button>

          <h3 className="font-semibold mt-6">Features</h3>

          <ul className="mt-4 space-y-3 text-gray-600 text-sm">

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Free WhatsApp Business API</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Free WhatsApp Blue Tick Application</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>₹50 Free Conversation Credits</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>
                Unlimited Free Service Conversations (Live chat Replies to user
                messages)
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Click to WhatsApp Ads Manager</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Upload & Manage Contacts</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Create tags & attributes</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Upto 10 Tags</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Upto 5 Custom Attributes</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Create template messages</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Live Chat Dashboard</span>
            </li>

          </ul>
        </div>




        {/* Basic Plan */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Basic</h2>

          <p className="text-gray-500 text-sm mt-1">
            Everything you need to get started with your business
          </p>

          <h1 className="text-4xl font-bold mt-6">
            ₹1500 <span className="text-sm font-normal">/month</span>
          </h1>

          <button className="w-full border rounded-lg py-2 mt-6 hover:bg-gray-200">
            Get Started
          </button>

          <h3 className="font-semibold mt-6">Per Template Message Charges</h3>

          <ul className="mt-6 space-y-3 text-gray-600 text-sm">

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Marketing: ₹1.09</span>
            </li>

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Utility: ₹0.145</span>
            </li>

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Authentication: ₹0.145</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Service: Unlimited Free Service Conversations</span>
            </li>

          </ul>
          <h3 className="font-semibold mt-6">Features</h3>

          <ul className="mt-4 space-y-3 text-gray-600 text-sm">

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>All Features of Free Forever</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>1 Owner + 5 FREE Agents included. Additional Agents at ₹750/ month each</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Smart Audience Segregation</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>
                Broadcasting & Retargeting
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Template Message APIs</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Multi-Agent Live Chat</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Multi-Agent Live Chat</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>AiSensy Marketplace Integrations</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>2400 Messages/min</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Shopify & WooCommerce Integrations</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Dialogflow Chatbot Integration</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Shared Team Inbox</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Click-to-WhatsApp Ads Manager</span>
            </li>

          </ul>
          <h3 className="font-semibold mt-6">Chatbot Flows</h3>

          <ul className="mt-4 space-y-3 text-gray-600 text-sm">

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>5 Chatbot Flows: ₹ 2500 (charged separately) r</span>
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-6 rounded-xl ">
          <h2 className="text-lg font-semibold">Pro</h2>

          <p className="text-gray-500 text-sm mt-1">
            Highly recommended plan to make the best use of Retargeting Campaigns
          </p>

          <h1 className="text-4xl font-bold mt-6">
            ₹3200 <span className="text-sm font-normal">/month</span>
          </h1>

          <button className="w-full bg-green-300 text-white rounded-lg py-2 mt-6 hover:bg-green-400">
            Get Started
          </button>
          <h3 className="font-semibold mt-6">Per Template Message charges</h3>

          <ul className="mt-6 space-y-3 text-gray-600 text-sm">

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Marketing: ₹1.09</span>
            </li>

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Utility: ₹0.145</span>
            </li>

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Authentication: ₹0.145</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Service: Unlimited Free Service Conversations</span>
            </li>

          </ul>
          <h3 className="font-semibold mt-6">Features</h3>

          <ul className="mt-4 space-y-3 text-gray-600 text-sm">

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>All features in Basic Plan</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Upto 100 Tags</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Upto 20 Custom Attributes</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Campaign Scheduler</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Campaign Click Tracking</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Smart Agent Routing</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Campaign Budget Analytics</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Project APIs</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Custom Agent Rules</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Carousel Template Click Tracking</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>CSV Campaign Scheduler</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>User Access Control</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Automatic Failed Message Retry </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>1 Owner + 5 FREE Agents included. Additional Agents at ₹750/ month each</span>
            </li>

          </ul>
          <h3 className="font-semibold mt-6">Chatbot Flows</h3>

          <ul className="mt-4 space-y-3 text-gray-600 text-sm">

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>5 Chatbot Flows: ₹ 2500 (charged separately) r</span>
            </li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Enterprise</h2>

          <p className="text-gray-500 text-sm mt-1">
            Recommended for 5 Lac+ Messages per month
          </p>

          <h1 className="text-4xl font-bold mt-6">
            Custom
          </h1>

          <button className="w-full border rounded-lg py-2 mt-6 hover:bg-gray-200">
            Get Connected
          </button>

          <h3 className="font-semibold mt-6">Per Template Message charges</h3>

          <ul className="mt-6 space-y-3 text-gray-600 text-sm">

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Marketing: Custom</span>
            </li>

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Utility: ₹0.145</span>
            </li>

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Authentication: ₹0.145</span>
            </li>

            <li className="flex gap-2">
              <span className="text-green-500">✔</span>
              <span>Service: Unlimited Free Service Conversations</span>
            </li>

          </ul>

          <h3 className="font-semibold mt-6">Features</h3>

          <ul className="mt-4 space-y-3 text-gray-600 text-sm">

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>All features in Pro Plan</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Recommended for Brands with 5 Lac+ Users</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Unlimited Tags</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>
                Unlimited Attributes
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Downloadable Reports</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Dedicated Account Manager</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Priority Customer Support</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Webhooks</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Higher Messaging Speed</span>
            </li>

          </ul>

        </div>

      </div>
      <div className="max-w-7xl mx-auto py-20 space-y-16">

        {/* Business Outside India */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h1 className="text-4xl font-bold">
              For Business outside India
            </h1>

            <p className="text-gray-500 mt-2">
              Explore International Pricing (Dollar)
            </p>
          </div>

          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Explore International Pricing →
          </button>

        </div>


        {/* Countrywise Pricing */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <h1 className="text-4xl font-bold">
              Countrywise per WhatsApp message Pricing
            </h1>

            <p className="text-gray-500 mt-2 max-w-3xl">
              Messaging costs vary by your user's country. Check the exact
              per-message charges for sending WhatsApp messages to users
              in different regions.
            </p>
          </div>

          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Explore Pricing →
          </button>

        </div>


        {/* Add Ons */}
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl font-bold">
            Add-Ons (Charged separately)
          </h1>

          <p className="text-gray-500 mt-2">
            Get Started with Virtual Number & Drag & Drop Flow Builder
          </p>

          {/* Card */}
          <div className="mt-8 bg-white border border-gray-400 rounded-xl grid md:grid-cols-3 overflow-hidden">

            {/* Left Price Section */}
            <div className="p-8 border-r border-gray-400">

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>Bill Monthly</span>

                {/* Toggle */}

                {/* <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>

                <span className="text-gray-400">Billed Quarterly</span> */}
              </div>

              <h1 className="text-5xl font-bold mt-6">₹199</h1>

              <p className="text-gray-500 text-sm mt-2">Per Month</p>

              <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Buy Now →
              </button>

            </div>


            {/* Right Content */}
            <div className="md:col-span-2 p-8">

              <h2 className="text-2xl font-semibold">
                Indian Virtual Number
              </h2>

              <p className="text-gray-500 border-b border-gray-400 pb-4 mt-2">
                Buy Indian Virtual Number for WhatsApp Business API (Requires GST / MSME for KYC)
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-600">

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Indian Number (Eg. +9186XXXX1234)</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Use this Number to get WhatsApp Business API</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>No Need to maintain SIM Card</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Free Onboarding Call</span>
                </div>

              </div>

            </div>

          </div>

        </div>
        {/* No Code */}
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl font-bold">
            No-code WhatsApp Chatbot
          </h1>

          <p className="text-gray-500 mt-2">
            Get Started with Drag & Drop Chatbot Flow Builder
          </p>

          {/* Card */}
          <div className="mt-8 bg-white border border-gray-400 rounded-xl grid md:grid-cols-3 overflow-hidden">

            {/* Left Price Section */}
            <div className="p-8 border-r border-gray-400">

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>Bill Monthly</span>

                {/* Toggle */}
                {/* <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>

                <span className="text-gray-400">Billed Quarterly</span> */}
              </div>

              <h1 className="text-5xl font-bold mt-6">₹2500</h1>

              <p className="text-gray-500 text-sm mt-2">Per Month</p>

              <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Buy Now →
              </button>

            </div>


            {/* Right Content */}
            <div className="md:col-span-2 p-8">

              <h2 className="text-2xl font-semibold">
                WhatsApp Chatbot Flow Builder
              </h2>

              <p className="text-gray-500 border-b border-gray-400 pb-4 mt-2">
                5 WhatsApp Chatbots per month
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-600">

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>5 Chatbot Flows - Build 5 unique Chatbots</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Connect WhatsApp Payments with Chatbot</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Manage Catalogues</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Automate Sales & Support seamlessly</span>
                </div>

              </div>

            </div>

          </div>

        </div>



      </div>
      {/* Important Pricing Terminologies */}
      <div className="bg-gray-100 py-16 px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Important Pricing Terminologies
          </h1>

          <p className="text-gray-500 mt-2">
            Let's make WhatsApp API Pricing easy to understand for you!
          </p>
        </div>

        {/* Integration Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {/* Customer Service Window */}
          <div className="bg-white text-left p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/azq7xnacsi111ptj.svg?w=24&h=24&dpr=2"
              alt="whatsapp"
              className="w-6 h-6 object-contain"
            />
            <h2 className="text-xl font-semibold">Customer Service Window</h2>
            <p className="text-gray-500 mt-2">
              When a user sends you a message, a 24-hour support window begins. Each new message from the user resets this window. During this window, you can respond freely without additional charges and you can respond with any free form messages. Also, utility templates delivered within this window won't be charged.
            </p>
          </div>

          {/* Unlimited Free Service messages */}
          <div className="bg-white text-left p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-700"
            >
              <circle cx="9" cy="9" r="4"></circle>

              <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Unlimited Free Service messages</h2>
            <p className="text-gray-500 mt-2">
              Each business using AiSensy receives Unlimited FREE service messages. Businesses can reply to user messages without incurring any charges; it's completely FREE.
            </p>
          </div>

          {/* Marketing messages */}
          <div className="bg-white text-left p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://umsousercontent.com/lib_AEVpIbRyMHUCpskL/cwi911xepebdt2ew.svg?w=24&h=24&dpr=2"
              alt="megaphone"
              className="w-6 h-6 object-contain"
            />
            <h2 className="text-xl font-semibold">Marketing messages</h2>
            <p className="text-gray-500 mt-2">
              Marketing messages include all promotional messages, offers, product updates. Each marketing message delivered costs ₹1.09/ message (for Indian users)
            </p>
          </div>

          {/* Utility Messages */}
          <div className="bg-white text-left p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/i26v0v1vs8v3tnh4.svg?w=24&h=24&dpr=2"
              alt="cart-arrow-down"
              className="w-6 h-6 object-contain"
            />
            <h2 className="text-xl font-semibold">Utility Messages</h2>
            <p className="text-gray-500 mt-2">
              Utility messages are transactional in nature and include messages for delivery  updates, transaction receipts, reminders and more. Each utility message delivered costs ₹0.145/ message (for Indian users). Utility templates delivered within a customer service window won't be charged.
            </p>
          </div>

          {/* Authentication Messages */}
          <div className="bg-white text-left p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Authentication Messages</h2>
            <p className="text-gray-500 mt-2">
              Authentication messages include messages used for verification purposes such as OTP, account registration and account recovery. Each authentication template message delivered costs ₹0.145/ message (for Indian users)
            </p>
          </div>

          {/* Service Messages */}
          <div className="bg-white text-left p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/vvrxy24lueuljdzj.svg?w=24&h=24&dpr=2"
              alt="magnifying-glass-dollar"
              className="w-6 h-6 object-contain"
            />
            <h2 className="text-xl font-semibold">Service Messages</h2>
            <p className="text-gray-500 mt-2">
              Service messages includes all user-initiated messages related to customer support, Chatbot support & queries asked by users. Service conversations are FREE for all businesses using AiSensy.
            </p>

          </div>

        </div>

      </div>
      <div className="border border-gray-300 p-12">
        <div className="float-left">
          <h1>Ready to get Started?</h1>
          <p>Create your account for free to try our product.</p>
        </div>
        <div className="float-right">
          <button className="bg-gray-500 text-white px-4 py-2 mx-2 px-6 rounded">Book a Demo</button>
          <button className="bg-green-500 text-white px-4 py-2 mx-2 px-6 rounded">Talk to Saler</button>
        </div>
      </div>

    </div>
  );
}