import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import POS from '../pages/POS.jsx'



function App() {
  return (
    <>
        <Routes>
          {}
          <Route path="" element={<Navigate to="/POS" />} />
          
          {/* Admin */}
          
          <Route path="/POS" element={<POS/>} />
          
         


          {/* Customer */}
          
          
          {/* 404 fallback route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </>
  );
}

export default App;