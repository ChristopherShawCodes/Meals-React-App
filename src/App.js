import './App.css';
import Search from './components/Search.jsx'
import Meals from './components/Meals.jsx'
import Modal from './components/Modal.jsx'
import Favorites from './components/Favorites.jsx'
import { useGlobalContext } from './context'


function App() {
  const {showModal,favorites} = useGlobalContext()


  return (
    <div className="App">
    <Search/>
  {favorites.length > 0 && <Favorites/>}
  <Meals/>
  {showModal && <Modal/>}
    </div>
  );
}

export default App;
