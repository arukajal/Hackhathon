import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/navbar/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/home/home";
import Dashboard from "./pages/dashboard";
import Help from "./pages/help";
import Learn from "./pages/learn";
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
