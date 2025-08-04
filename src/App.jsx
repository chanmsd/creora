import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';
import PortfolioPage from './Pages/PortfolioPage';
import Form from './Pages/Form';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfoliopage" element={<PortfolioPage />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;