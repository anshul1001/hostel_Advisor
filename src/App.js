import './App.css';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Post from './Components/Post'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  return (

    <div className="App" >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/post" element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
