import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-3 border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-2">
          <Link to="/"><img src={logo} className="h-8" /></Link>
        </div>

        <ul className="flex gap-6 text-gray-700">

          
          <li>
            <Link to="/pricing"
            className="hover:text-green-500"
            >Pricing</Link>
          </li>

          <li>
            <Link to="/product"
            className=" hover:text-green-500"
            >Product</Link>
          </li>

          <li>
            <Link to="/features"
            className=" hover:text-green-500"
            >Features</Link>
          </li>


          <li>
            <Link to="/industries"
            className=" hover:text-green-500"
            >Industries</Link>
          </li>

          <li>
            <Link to="/resources"
            className=" hover:text-green-500"
            >Resources</Link>
          </li>

          <li>
            <Link to="/integrations"
            className=" hover:text-green-500"
            >Integrations</Link>
          </li>

          <li>
            <Link to="/apk"
            className=" hover:text-green-500"
            >App</Link>
          </li>

          <li>
            <Link to="/partner"
            className=" hover:text-green-500"
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