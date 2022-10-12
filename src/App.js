import './App.css';
import Search from './components/Search.jsx'
import Meals from './components/Meals.jsx'
import Modal from './components/Modal.jsx'
import Favorites from './components/Favorites.jsx'




function App() {
  return (
    <div className="App">
  <h1>Meals React App</h1>
  {/* <Search/> */}
  {/* <Favorites/> */}
  <Meals/>
  {/* <Modal/> */}
    </div>
  );
}

export default App;
