import React from 'react'
import MapPage from '../pages/MapPage.jsx'
import DashBoard from '../pages/DashBoard.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";


const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return children;
};

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
