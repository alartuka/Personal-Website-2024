import './App.css';
import Background from './components/pages/Background';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/utils/ScrollTop';
import Footer from './components/pages/Footer';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />

      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
