import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Industries from "./pages/Industries";
import Integrations from "./pages/Integrations";
import Resources from "./pages/Resources";
import Partner from "./pages/Partner";
import Apk from "./pages/Apk";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="pt-20">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/apk" element={<Apk />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;