import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Post from './Pages/Post'
import Login from './Pages/Login'
import Register from './Pages/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Search from './Pages/Search';
import Single from './Pages/Single'

function App() {
  
  return (

    <div className="App" >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path ="/Single" element = {<Single/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Search" element={<Search/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
