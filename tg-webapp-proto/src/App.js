import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
