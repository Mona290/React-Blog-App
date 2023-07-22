import Home from "./Components/home/Home";
import Single from "./pages/single/Single";
import TopList from './Components/topbar/TopList';
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Contact from "./pages/Contact/Contacts";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/About/Aboutme";
import Footer from "./Components/footer/Footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  const user = false;
  return (
     <Router>
    <TopList />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write" element={<Write/> } />
        <Route path="/settings" element={user ? <Settings/> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        
      </Routes>
      <Footer/>
    </Router>
  
    
  );
}

export default App;
