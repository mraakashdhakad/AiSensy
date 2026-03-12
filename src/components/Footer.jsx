const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4">AiSensy</h2>
          <p className="text-gray-400">
            AI powered WhatsApp marketing platform for businesses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Blog</li>
            <li>Documentation</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Partners</li>
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