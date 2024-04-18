import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Create from './pages/Create';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/create" element={<Create />} />
          {/* Add more Route components for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
