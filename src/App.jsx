import Navbar from './Components/Navbar'
// import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Resources from './Components/Resources';
import Admin from './Components/Admin';
import Training from './Components/Training';
import Login from './Components/Login';
import Leaderboard from './Components/Leaderboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <Router>
    <>
      {/* <Nav /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/training" element={<Training />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  </Router>
  )
}

export default App
