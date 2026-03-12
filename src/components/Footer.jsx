import { Link } from "react-router-dom";
import logo from "../assets/logo.png";const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-12 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <Link to="/"><img src={logo} className="h-8" /></Link>
          <p className="text-gray-400">
            AI powered WhatsApp marketing platform for businesses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Plateform</h3>
          <ul className="space-y-2 text-gray-400">
             <li><Link to="/product">Product</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/integrations">Integrations</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Blog</li>
            <li>Documentation</li>
            <li>Support</li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/partner">Partners</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2026 AiSensy Clone. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;