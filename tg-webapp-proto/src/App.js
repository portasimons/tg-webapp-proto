import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(props) {
  let postsData = props.state.posts;
  let profileInfo = props.state.profile;

  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile profileInfo={profileInfo} postsData={postsData}/>} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
