import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleBook from './pages/SingleBook';
import Sell from './pages/Sell.jsx';
import SearchByName from './components/SearchByName.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path='/admin/dashboard' element={<Sell></Sell>}></Route>
        <Route path="/book/search/:name" element={<SearchByName />} />
        <Route path="/book/search/:name" element={<SearchByName />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

