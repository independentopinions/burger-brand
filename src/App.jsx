import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Links from './pages/Links';
import Current from './pages/Current';
import Radio from './pages/Radio';
import LocationGallery from './pages/LocationGallery';
import MapLinks from './pages/MapLinks';
import NotFound from './pages/NotFound';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/links" element={<Links />} />
          <Route path="/current" element={<Current />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/location/:id" element={<LocationGallery />} />
          <Route path="/map" element={<MapLinks />} />
          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </SmoothScroll>
  );
}

export default App;
