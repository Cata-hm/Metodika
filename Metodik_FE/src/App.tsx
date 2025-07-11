import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MetodikaRouter from './routes/MetodikaRouter';
import AdminRouter from './routes/AdminRouter';

function App() {
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
