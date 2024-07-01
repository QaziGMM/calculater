import Header from "./copmonents/pages/header";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
