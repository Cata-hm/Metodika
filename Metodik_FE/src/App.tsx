// src/App.tsx
// This is the main entry point of the Metodika application, setting up routing and rendering
// the main components of the application.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MetodikaRouter from './routes/MetodikaRouter';
import AdminRouter from './routes/AdminRouter';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MetodikaRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
