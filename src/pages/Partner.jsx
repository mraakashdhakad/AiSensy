import { Link } from "react-router-dom";
import partner1 from "../assets/partner-1.jpg";
import partner2 from "../assets/partner-2.jpg";
import partner3 from "../assets/partner-3.jpg";
import partner4 from "../assets/partner-4.jpg";
import partner5 from "../assets/partner-5.jpg";
import partner6 from "../assets/partner-6.jpg";
import partner7 from "../assets/partner-7.jpg";

export default function Partner() {
  return (
    <div className="bg-white py-22 px-5">
      <div className="flex ">
        <div className="w-1/2 py-10 px-2">
          <h1 className="text-5xl font-bold">Partner With <span className="text-green-600">AiSensy</span></h1>
          <p className="text-lg font-semibold text-gray-600 mt-1">
            Create your New Revenue Stream
          </p>
          <p className="py-5 font-medium mt-1">
            Add the Smartest WhatsApp Engagement & Click to WhatsApp ads Platform to your Offerings!
          </p>
          <Link to="#">
            <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded flex items-center gap-2">
              <span>Request Callback</span>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img src={partner1} alt="partner" />

        </div>
      </div>

      <div className="flex py-20
       ">

        <div className=" w-1/2">
          <img src={partner2} alt="partner"
            className="rounded"
          />

        </div>
        <div className="w-1/2 py-2 ml-8 px-2">
          <h1 className="text-4xl pb-3 font-medium">Our Partner Models</h1>
          <p className="text-lg text-gray-500 pb-3 font-medium">
            AiSensy Offers Multiple Partner Models for Agencies, Freelancers, Marketplaces, Businesses and Promoters.
          </p>
          <div className="pb-4 flex">
            <div className="mt-3 mr-3 justify-center item-center">
              <img
                src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/wruzlo16x5l9duoi.svg?w=24&h=24&dpr=2"
                alt="dollar-sign"
                className="bg-gray-150 p-1 rounded-full w-7 h-7 object-contain"
              />
            </div>
            <div className="flex flex-col pt-1">
              <h1 className="text-lg font-medium">
                Affiliate Commission Model
              </h1>
              <p className="text-gray-400 text-sm">
                Earn 20% Recurring Affiliate Commission on each referral (min payout of ₹999)
              </p>
            </div>
          </div>

          <div className="pb-4 flex">
            <div className="mt-2 mr-3 justify-center item-center">
              <img
                src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/llzuji5v2qibjpad.svg?w=24&h=24&dpr=2"
                alt="recycle-icon"
                className="bg-gray-150 p-1 rounded-full w-7 h-7 object-contain"
              />
            </div>
            <div className="flex flex-col pt-1">
              <h1 className="text-lg font-medium">
                Prime Plus Partner
              </h1>
              <p className="text-gray-400 text-sm">
                Earn higher Recurring Affiliate Commission across all revenue streams
              </p>
            </div>
          </div>

          <div className="pb-4 flex">
            <div className="mt-2 mr-3 justify-center item-center">
              <img
                src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/f767dyyqa8jab6fx.svg?w=24&h=24&dpr=2"
                alt="arrow-trend-up"
                className="bg-gray-150 p-1 rounded-full w-7 h-7 object-contain"
              />
            </div>
            <div className="flex flex-col pt-1">
              <h1 className="text-lg font-medium">
                WhiteLabelled Solution
              </h1>
              <p className="text-gray-400 text-sm">
                Resell AiSensy Platform under your own Branding with your Logo and Sub-Domain.
              </p>
            </div>
          </div>

          <div className="pb-4 flex">
            <div className="mt-2 mr-3 justify-center item-center">
              <img
                src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/60mtd8ux3j69wcw1.svg?w=24&h=24&dpr=2"
                alt="bolt-icon"
                className="bg-gray-150 p-1 rounded-full w-7 h-7 object-contain"
              />
            </div>
            <div className="flex flex-col pt-1">
              <h1 className="text-lg font-medium">
                Get Access to APIs
              </h1>
              <p className="text-gray-400 text-sm">
                Build your own Platform based on our Platform and Partner APIs.
              </p>
            </div>
          </div>

          <div className="pb-4 flex">
            <div className="mt-2 mr-3 justify-center item-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="bg-gray-150 p-1 rounded-full w-7 h-7 object-contain"
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>
            </div>
            <div className="flex flex-col pt-1">
              <h1 className="text-lg font-medium">
                Integration Partnership
              </h1>
              <p className="text-gray-400 text-sm">
                Integrate AiSensy into your platform and enable clients to send WhatsApp messages directly from your dashboard.
              </p>
            </div>
          </div>

          <Link to="#">
            <button className="bg-green-400 hover:bg-green-500 text-white mt-10 px-3 py-2 rounded flex items-center gap-2">
              <spam>Request Callback</spam>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
        </div>

      </div>

      <h1 className="mt-15 mb-15 text-5xl font-semibold text-center"> Deep dive into <spam className="text-green-600">AiSensy Partner Models</spam></h1>


      <div className="flex ">
        <div className="w-1/2 mt-22 py-10 px-2">
          <h1 className="text-xl font-bold">Affiliate Partner</h1>
          <p className="text-lg text-gray-600 mt-1">
            Turn your network into income. Share your referral link, introduce businesses to AiSensy, and earn <spam className="font-semibold">20% commission every month</spam> for as long as they stay.
          </p>
          <p className="py-5 text-gray-600 mt-1">
            No support worries - we’ll handle onboarding and setup. <span className="font-semibold">Supports minimum payout of ₹999 (payments roll out quarterly)</span>
          </p>
          <Link to="#">
            <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded flex items-center gap-2">
              <spam>Request Callback</spam>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img src={partner3} alt="partner" />

        </div>
      </div>

      <div className="flex py-20
       ">

        <div className="w-1/2">
          <img src={partner4} alt="partner" />

        </div>
        <div className="w-1/2 ml-15 mt-20 py-10 px-2">
          <h1 className="text-xl font-bold">Prime Plus Partner</h1>
          <p className="text-lg font-semibold text-gray-600 mt-1">
            Earn higher recurring commissions not just on AiSensy plans sold, but also on <spam className="font-semibold"> Ad Credits, AI Credits, and WhatsApp Conversation Credits</spam>
          </p>
          <p className="py-5 font-medium text-gray-600 mt-1">
            With Prime Plus, every sale and every conversation helps you grow your revenue faster than ever.
          </p>
          <Link to="#">
            <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded flex items-center gap-2">
              <spam>Request Callback</spam>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex ">
        <div className="w-1/2 mt-25 py-10 px-2">
          <h1 className="text-xl">White-Labelled WhatsApp Solution</h1>
          <p className="text-lg font-medium text-gray-600 mt-2">
            Want to launch your own WhatsApp Marketing platform? Get AiSensy platform under your brand name - custom domain, logo, pricing, everything. We manage the backend, while you own the customer experience
          </p>

          <Link to="#">
            <button className="bg-green-400 hover:bg-green-500 mt-5 text-white px-3 py-2 rounded flex items-center gap-2">
              <spam>Request Callback</spam>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img src={partner5} alt="partner" />

        </div>
      </div>

      <div className="flex py-20
       ">

        <div className="w-1/2">
          <img src={partner6} alt="partner" />

        </div>
        <div className="w-1/2 py-25 px-2">
          <h1 className="text-xl"> Direct APIs Partnership</h1>
          <p className="text-lg font-semibold text-gray-600 mt-2">
            Build your own WhatsApp Marketing platform on top of AiSensy's rock-solid WhatsApp APIs. Prefer this if you have a tech team who can dedicate months to build a custom WhatsApp solution built on top of Official WhatsApp APIs.
          </p>

          <Link to="#">
            <button className="bg-green-400 hover:bg-green-500 text-white mt-5 px-3 py-2 rounded flex items-center gap-2">
              <spam>Request Callback</spam>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex py-20">
        <div className="w-1/2 py-22 px-2">
          <h1 className="text-xl">Integration Partnership</h1>
          <p className="text-lg font-semibold text-gray-600 mt-1">
            Integrate AiSensy into your platform and enable clients to send WhatsApp messages directly from your dashboard.
          </p>
          <p className="text-lg font-semibold text-gray-600 mt-1 py-5">
            With the Integration Partnership, you make your product more powerful, allowing users to link AiSensy with your product and automate WhatsApp notifications seamlessly, without any complex setups.
          </p>
          <Link to="#">
            <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded flex items-center gap-2">
              <spam>Request Callback</spam>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img src={partner7} alt="partner" />

        </div>
      </div>

      <h1 className="mt-15 mb-15 text-5xl font-semibold text-center"> Why Partner with <spam className="text-green-600">AiSensy?</spam></h1>

      <div className="flex text-center">
        <div className="w-1/4 border border-gray-400 rounded-lg ml-6 p-5">
          <h1 className="text-2xl font-bold">6000+</h1>
          <p className="font-semibold text-gray-600">Partners</p>
        </div>
        <div className="w-1/4 border border-gray-400 rounded-lg ml-6 p-5">
          <h1 className="text-2xl font-bold">250Cr+</h1>
          <p className="font-semibold text-gray-600">Revenue Generated by Partners</p>
        </div>
        <div className="w-1/4 border border-gray-400 rounded-lg ml-6 p-5">
          <h1 className="text-2xl font-bold">20+</h1>
          <p className="font-semibold text-gray-600">Countries</p>
        </div>
        <div className="w-1/4 border border-gray-400 rounded-lg ml-6 p-5">
          <h1 className="text-2xl font-bold">30+</h1>
          <p className="font-semibold text-gray-600">Tech Partners</p>
        </div>
      </div>

      <div className="mt-15 mb-15 text-center">

        <h1 className="text-5xl mb-5 font-bold">Founders & Marketers Love us</h1>
        <p className="font-semibold text-gray-600">Trusted by 100,000+ Businesses across 57 Countries</p>

      </div>

      <div className="mt-15 mb-15 text-center">

        <h1 className="text-5xl mb-5 font-bold">About AiSensy</h1>
        <p className="font-semibold text-gray-600">AiSensy is one Complete WhatsApp Engagement Platform helping 150,000+ businesses drive 25-40% revenue using WhatsApp.</p>

      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 flex flex-col border border-gray-300 h-100 rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_AEVpIbRyMHUCpskL/cwi911xepebdt2ew.svg?w=24&h=24&dpr=2"
            alt="megaphone-icon"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold"><span className="text-green-500">Broadcast </span> Offers & Retarget Seamlessly+</h1>
          <p className="mb-5 font-semibold text-gray-400">Businesses can Broadcast Offers, discount coupon and more after taking opt-in from users. Simply Import Contacts and Start braodcasting without worrying about getting blocked.</p>
          <Link to="#" className="mt-auto">
            <button className=" bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>
        <div className="p-6 flex flex-col border border-gray-300 h-100rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/ktninxbojqvsq13u.svg?w=24&h=24&dpr=2"
            alt="people-group-icon"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold">Multi-Agent Live <span className="text-green-500">Chat</span></h1>
          <p className="mb-5 font-semibold text-gray-400">Get access to Unlimited Agents and solve for Customer Support on WhatsApp. Further Install Chatbots to Automate query resolution. </p>
          <Link to="#" className="mt-auto">
            <button className=" bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>
        <div className="p-6 flex flex-col border border-gray-300 h-100 rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/citegv6melgetvc1.svg?w=24&h=24&dpr=2"
            alt="check-double-icon"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold">Automate <spam className="text-green-500">Notifications</spam></h1>
          <p className="mb-5 font-semibold text-gray-400">Integrate AiSensy platform with Ecommerce Portals, Payment Gateways, CRMs or your Custom Apps to drive event, payment and more timely notifications.</p>
          <Link to="#" className="mt-auto">
            <button className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>
        <div className="p-6 flex flex-col border border-gray-300 h-100 rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/zbkoo9p044euc0xw.svg?w=24&h=24&dpr=2"
            alt="robot-icon"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold">Chatbot Flow <span className="text-green-500">Builder</span></h1>
          <p className="mb-5 font-semibold text-gray-400">Build multiple WhatsApp Chatbots easily, thanks to a drag-and-drop interface that requires zero coding expertise.</p>
          <Link to="#" className="mt-auto">
            <button className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>
        <div className="p-6 flex flex-col border border-gray-300 h-100 rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/vzbtuu6th3oug9zh.svg?w=24&h=24&dpr=2"
            alt="list-check-icon"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold">WhatsApp <span className="text-green-500">Forms</span></h1>
          <p className="mb-5 font-semibold text-gray-400">Create and send forms with this native integration. Capture leads, book appointments, collect feedback, and more.</p>
          <Link to="#" className="mt-auto">
            <button className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>
        <div className="p-6 flex flex-col border border-gray-300 h-100 rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/2r29l15d3wili0v2.svg?w=24&h=24&dpr=2"
            alt="firefox-browser"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold">WhatsApp <span className="text-green-500">Webviews</span></h1>
          <p className="mb-5 font-semibold text-gray-400">Load web pages directly within WhatsApp. No more losing customers to external browsers.</p>
          <Link to="#" className="mt-auto">
            <button className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>
        <div className="p-6 flex flex-col border border-gray-300 h-100 rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/ky23ag5h63vpn45o.svg?w=24&h=24&dpr=2"
            alt="sack-dollar-icon"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold">WhatsApp <span className="text-green-500">Payments</span></h1>
          <p className="mb-5 font-semibold text-gray-400">Transform your customer interactions by allowing payments directly through WhatsApp.</p>
          <Link to="#" className="mt-auto">
            <button className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>
        <div className="p-6 flex flex-col border border-gray-300 h-100 rounded-lg ml-6">
          <img
            src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/wyohurqhh7xnkcyn.svg?w=24&h=24&dpr=2"
            alt="adversal-icon"
            className="mb-3 w-6 h-6 object-contain"
          />
          <h1 className="mb-4 text-lg font-bold">Ads that <span className="text-green-500">Click</span> to WhatsApp</h1>
          <p className="mb-5 font-semibold text-gray-400">Drive 5x More Leads with Ads that Click to WhatsApp</p>
          <Link to="#" className="mt-auto">
            <button className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded flex items-center gap-2">
              Explore
            </button>
          </Link>
        </div>

      </div>
      <div className="mx-10 my-15 px-2 py-5 text-center">
        <div className=" text-center">
          <h1 className="text-5xl mb-5 font-bold">Grow with AiSensy</h1>
          <p className="font-semibold text-gray-600">Become an AiSensy Partner</p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="justify-center items-center flex flex-col">
            <img
              src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/ky23ag5h63vpn45o.svg?w=24&h=24&dpr=2"
              alt="sack-dollar"
              className="relative w-6 h-6 mb-5 object-contain block"
            />
            <h2 className="text-xl font-semibold">Monthly Payouts</h2>
            <p className="mt-2 text-gray-400">Get your Earned Commission Monthly</p>
          </div>
          <div className="justify-center items-center flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800 mb-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <h2 className="text-xl font-semibold">Onboarding Support</h2>
            <p className="mt-2 text-gray-400">Our team helps you onboard Customers Easily</p>
          </div>
          <div className="justify-center items-center flex flex-col">
            <img
              src="https://umsousercontent.com/lib_LhuefaHhCaLhDedO/f767dyyqa8jab6fx.svg?w=24&h=24&dpr=2"
              alt="arrow-trend-up"
              className="mb-5 w-6 h-6 object-contain block"
            />

            <h2 className="text-xl font-semibold">Tracking Dashboard</h2>
            <p className="mt-2 text-gray-400">Track all your Conversions via our Affiliate Dashboard</p>
          </div>
        </div>
      </div>
        <div className="bg-white border border-gray-300 rounded-lg p-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div>

          <h3 className="text-3xl font-bold">
           Become a Partner Today
          </h3>

          <p className="text-gray-500 mt-2">
           Signup Now, Share your Link and Start getting Partner Benefits Instantly!
          </p>

        </div>

        {/* Right Buttons */}
        <div className="flex gap-4 mt-6 md:mt-0">

          <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition">
            Signup for Affiliate
          </button>

          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
           Book a Demo →
          </button>

        </div>


      </div>
    </div>
  );
}