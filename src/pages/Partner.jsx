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
              <spam>Request Callback</spam>
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



    </div>
  );
}