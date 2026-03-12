import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // click outside close
  useEffect(() => {

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (

    <header className="w-full border-b bg-white">

      <div className="flex justify-between items-center px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">
          AiSensy
        </h1>

        {/* Menu */}
         <li>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setOpen(true)}
            >

              <button className="font-medium">
                Product ▾
              </button>

              {open && (

                <div className="absolute top-8 left-0 w-72 bg-white shadow-lg rounded-lg">

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

      </div>

    </header>

  );
}