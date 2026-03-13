import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [integrationsOpen, setIntegrationsOpen] = useState(false);
  const [apkOpen, setApkOpen] = useState(false);
  const productDropdownRef = useRef();
  const featureDropdownRef = useRef();
  const industriesDropdownRef = useRef();
  const resourcesDropdownRef = useRef();
  const integrationsDropdownRef = useRef();
  const apkDropdownRef = useRef();


  // click outside close
  useEffect(() => {

    function handleClickOutside(event) {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target)) {
        setProductOpen(false);
      }
      if (featureDropdownRef.current && !featureDropdownRef.current.contains(event.target)) {
        setFeatureOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIndustriesOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
      if (integrationsDropdownRef.current && !integrationsDropdownRef.current.contains(event.target)) {
        setIntegrationsOpen(false);
      }
      if (apkDropdownRef.current && !apkDropdownRef.current.contains(event.target)) {
        setApkOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-3 border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-2">
          <Link to="/"><img src={logo} className="h-8" /></Link>
        </div>

        <ul className="flex gap-6 text-gray-700">

          {/* Pricing List */}
          <li>
            <Link to="/pricing"
              className="hover:text-green-500 font-medium"
            >Pricing</Link>
          </li>

          {/* Product List */}
          <li>
            <div
              className="relative"
              ref={productDropdownRef}
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >

              <button className="font-medium">
                Product ▾
              </button>

              {productOpen && (

                <div className="absolute text-left top-6 left-1/2 transform -translate-x-1/2 w-65 bg-white shadow-lg rounded-xl">

                  <Link
                    to="/whatsapp-marketing"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <circle cx="6.18" cy="17.82" r="2.18"></circle>
                      <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Marketing
                      </h4>

                      <p className="text-sm text-gray-500">
                        Broadcast, Automate & Grow
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/ai-ads-manager"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        AI Ads Manager
                      </h4>

                      <p className="text-sm text-gray-500">
                        5X your Leads right away
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-chatbots"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Chatbots
                      </h4>

                      <p className="text-sm text-gray-500">
                        Automate messaging with AI
                      </p>
                    </div>

                  </Link>
                  <Link
                    to="/whatsapp-marketing"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        AI WhatsApp Chatbot
                      </h4>

                      <p className="text-sm text-gray-500">
                        Automate everything with AI
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/ai-ads-manager"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Payments
                      </h4>

                      <p className="text-sm text-gray-500">
                        Collect Payments within WhatsApp
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-chatbots"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Forms
                      </h4>

                      <p className="text-sm text-gray-500">
                        Native Forms within WhatsApp
                      </p>
                    </div>

                  </Link>
                  <Link
                    to="/whatsapp-marketing"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Link & QR
                      </h4>

                      <p className="text-sm text-gray-500">
                        Free WhatsApp Link & QR
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/ai-ads-manager"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Blue Tick
                      </h4>

                      <p className="text-sm text-gray-500">
                        Get Verified on WhatsApp
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-chatbots"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="mt-1"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Showroom Kit
                      </h4>

                      <p className="text-sm text-gray-500">
                        QR stand for your offline store
                      </p>
                    </div>

                  </Link>
                  <Link
                    to="/whatsapp-chatbots"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Image Icon */}
                    <img
                      src="https://umsousercontent.com/lib_OmxObYAztgLCGJAC/55407pfxvjuu29it.png"
                      alt="AiPersy"
                      className="w-[22px] h-[22px] mt-1 object-contain"
                    />

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        AiPersy
                      </h4>

                      <p className="text-sm text-gray-500">
                        Hire 10X Faster with AI
                      </p>
                    </div>

                  </Link>

                </div>

              )}

            </div>

          </li>

          {/* Feature List */}

          <li>
            <div
              className="relative"
              ref={featureDropdownRef}
              onMouseEnter={() => setFeatureOpen(true)}
              onMouseLeave={() => setFeatureOpen(false)}
            >

              <button className="font-medium">
                Features ▾
              </button>

              {featureOpen && (

                <div className="absolute text-left top-6 left-1/2 transform -translate-x-1/2 w-65 bg-white shadow-lg rounded-xl">

                  <Link
                    to="/features"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Features
                      </h4>

                      <p className="text-sm text-gray-500">
                        Explore all Powerful AiSensy features
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-broadcasting"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <circle cx="6.18" cy="17.82" r="2.18" />
                      <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Broadcasting
                      </h4>

                      <p className="text-sm text-gray-500">
                        Retargeting, CRM & more
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/ai-whatsapp-chatbot"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        AI WhatsApp Chatbots
                      </h4>

                      <p className="text-sm text-gray-500">
                        Automate anything with AI
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/ads-manager"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Ads Manager
                      </h4>

                      <p className="text-sm text-gray-500">
                        3X Your Leads
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-chatbots"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Chatbots
                      </h4>

                      <p className="text-sm text-gray-500">
                        Drag & Drop Flow Builder
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-catalogs"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Catalogs
                      </h4>

                      <p className="text-sm text-gray-500">
                        Sell Products on WhatsApp
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-payments"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Payments
                      </h4>

                      <p className="text-sm text-gray-500">
                        Collect Payments via UPI & Card
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-forms"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Forms
                      </h4>

                      <p className="text-sm text-gray-500">
                        Native data Collection
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/whatsapp-webviews"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WhatsApp Webviews
                      </h4>

                      <p className="text-sm text-gray-500">
                        Web within WhatsApp
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/click-tracking"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Image Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Click Tracking
                      </h4>

                      <p className="text-sm text-gray-500">
                        Import Broadcast & Track
                      </p>
                    </div>

                  </Link>

                </div>

              )}

            </div>

          </li>

          {/* Industries List */}
          <li>
            <div
              className="relative"
              ref={industriesDropdownRef}
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >

              <button className="font-medium">
                Industries ▾
              </button>

              {industriesOpen && (

                <div className="absolute text-left top-6 left-1/2 transform -translate-x-1/2 w-65 bg-white shadow-lg rounded-xl">

                  <Link
                    to="/all-industries"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0 0 11 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0 1 11 6zm5.64 9.14A6.89 6.89 0 0 0 17.92 12H15.9a5 5 0 0 1-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0 0 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        All Industries
                      </h4>

                      <p className="text-sm text-gray-500">
                        Industry-wise Use Cases
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/education"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Education
                      </h4>

                      <p className="text-sm text-gray-500">
                        Edtech, Coaches, Institutes
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/e-commerce"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        E-commerce
                      </h4>

                      <p className="text-sm text-gray-500">
                        Brands & D2C
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/finance-insurance"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Finance & Insurance
                      </h4>

                      <p className="text-sm text-gray-500">
                        Fintech, Banking & more
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/healthcare"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Healthcare
                      </h4>

                      <p className="text-sm text-gray-500">
                        Appointment Booking, Hospitals
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/automobile"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Automobile
                      </h4>

                      <p className="text-sm text-gray-500">
                        Book Test Drive, Sell Faster
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/real-estate"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Real Estate
                      </h4>

                      <p className="text-sm text-gray-500">
                        Developers, Brokers, Coworking
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/it-services"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path
                        fillOpacity=".3"
                        d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"
                      />
                      <path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        IT Services & Internet
                      </h4>

                      <p className="text-sm text-gray-500">
                        Showcase your services
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/event-webinar"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                    </svg>
                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Events & Webinar
                      </h4>

                      <p className="text-sm text-gray-500">
                        Boost Attendance
                      </p>
                    </div>

                  </Link>

                </div>

              )}

            </div>

          </li>

          {/* Resources List */}
          <li>
            <div
              className="relative"
              ref={resourcesDropdownRef}
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >

              <button className="font-medium">
                Resources ▾
              </button>

              {resourcesOpen && (

                <div className="absolute text-left top-6 left-1/2 transform -translate-x-1/2 w-65 bg-white shadow-lg rounded-xl">

                  <Link
                    to="/help-center"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Hepl center
                      </h4>

                      <p className="text-sm text-gray-500">
                        FAQs, How-to's & more
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/tutorials"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Tutorials
                      </h4>

                      <p className="text-sm text-gray-500">
                        Learn how to use the platform
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/youtube"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        YouTube
                      </h4>

                      <p className="text-sm text-gray-500">
                        Tutorials, Podcast, Events & more
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/template-library"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Template Library
                      </h4>

                      <p className="text-sm text-gray-500">
                        Explore the right template
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/blogs"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Blogs
                      </h4>

                      <p className="text-sm text-gray-500">
                        Latest Updats & Stories
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/developer-api"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Developer Apis
                      </h4>

                      <p className="text-sm text-gray-500">
                        Send Templates vai API
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/case-studies"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Case Studies
                      </h4>

                      <p className="text-sm text-gray-500">
                        Business Growth stories
                      </p>
                    </div>

                  </Link>

                </div>

              )}

            </div>

          </li>

          {/* Integration List */}
          <li>
            <div
              className="relative"
              ref={integrationsDropdownRef}
              onMouseEnter={() => setIntegrationsOpen(true)}
              onMouseLeave={() => setIntegrationsOpen(false)}
            >

              <button className="font-medium">
                Integrations ▾
              </button>

              {integrationsOpen && (

                <div className="absolute text-left top-6 left-1/2 transform -translate-x-1/2 w-65 bg-white shadow-lg rounded-xl">

                  <Link
                    to="/explore-integrations"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-green-700"
                    >
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                    </svg>
                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Explore all Integrations
                      </h4>

                      <p className="text-sm text-gray-500">
                        Automate Notifications
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/shopify"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-green-700"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Shopify
                      </h4>

                      <p className="text-sm text-gray-500">
                        Abandoned Cart, Order Status & more
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/razopay"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-green-700"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                    </svg>
                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Razorpay
                      </h4>

                      <p className="text-sm text-gray-500">
                        Send Payments Notifications
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/shopify-checkouts"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Shopify Checkouts
                      </h4>

                      <p className="text-sm text-gray-500">
                        Simple, Magic Checkout & more
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/web-engage"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"></path>
                    </svg>
                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        WebEngage
                      </h4>

                      <p className="text-sm text-gray-500">
                        Automate your Journey's
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/" lead-squared
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        LeadSquared
                      </h4>

                      <p className="text-sm text-gray-500">
                        Connect your CRM
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/integrately"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Integrately
                      </h4>

                      <p className="text-sm text-gray-500">
                        Build Automations
                      </p>
                    </div>

                  </Link>

                  <Link
                    to="/webhook-api"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-700"
                    >
                      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.353.353 0 0 1 .08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 0 1-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path>
                    </svg>
                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Webhook Apis
                      </h4>

                      <p className="text-sm text-gray-500">
                        Receive incoming data from AiSensy to your backend
                      </p>
                    </div>

                  </Link>

                </div>

              )}

            </div>

          </li>

          {/* Apps list */}
          <li>
            <div
              className="relative"
              ref={apkDropdownRef}
              onMouseEnter={() => setApkOpen(true)}
              onMouseLeave={() => setApkOpen(false)}
            >

              <button className="font-medium">
                Apps ▾
              </button>

              {apkOpen && (

                <div className="absolute text-left top-6 left-1/2 transform -translate-x-1/2 w-65 bg-white shadow-lg rounded-xl">

                  <Link
                    to="https://play.google.com/store/apps/details?id=com.aisensy.mobile"
                    target="_blank"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* New Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      className="mt-1 text-green-700"
                      fill="currentColor"
                    >
                      <path d="M4.943 18.05l7.666-4.327-1.646-1.823-6.02 6.15zm-2.8-15.927c-.089.158-.143.34-.143.542V17.79c0 .28.105.52.263.71L9.89 10.71 2.142 2.123zM17.48 9.482l-2.673-1.509-2.722 2.781 1.951 2.163 3.444-1.943a.946.946 0 0 0 .52-.746.946.946 0 0 0-.52-.746zm-4.115-2.323l-9.22-5.204 6.866 7.61 2.354-2.406z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Download on Android
                      </h4>
                    </div>

                  </Link>
                  <Link
                    to="https://apps.apple.com/in/app/aisensy/id6711351197"
                    target="_blank"
                    className="flex items-start gap-3 px-4 py-1.5 hover:bg-gray-100"
                  >

                    {/* Apple Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      className="mt-1 text-green-700"
                      fill="currentColor"
                    >
                      <path d="M17.564 13.862c-.413.916-.612 1.325-1.144 2.135-.742 1.13-1.79 2.538-3.087 2.55-1.152.01-1.448-.75-3.013-.741-1.564.008-1.89.755-3.043.744-1.297-.012-2.29-1.283-3.033-2.414-2.077-3.16-2.294-6.87-1.013-8.843.91-1.401 2.347-2.221 3.697-2.221 1.375 0 2.24.754 3.376.754 1.103 0 1.775-.756 3.365-.756 1.2 0 2.474.655 3.381 1.785-2.972 1.629-2.49 5.873.514 7.007zM12.463 3.808c.577-.742 1.016-1.788.857-2.858-.944.065-2.047.665-2.692 1.448-.584.71-1.067 1.763-.88 2.787 1.03.031 2.096-.584 2.715-1.377z"></path>
                    </svg>

                    {/* Text */}
                    <div>
                      <h4 className="font-semibold">
                        Download on iOS
                      </h4>
                    </div>

                  </Link>

                </div>

              )}

            </div>

          </li>

          {/* Partner List */}
          <li>
            <Link to="/partner"
              className=" hover:text-green-500 font-medium"
            >Partner</Link>
          </li>

        </ul>

        <div className="flex gap-3">

          <Link to="/signup">
            <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded flex items-center gap-2">
              <spam>Start for FREE</spam>
              <svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" class="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg>
            </button>
          </Link>
          <Link to="/login">
            <button className="border hover:bg-gray-200 px-4 py-2 rounded">
              Login

            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Header;