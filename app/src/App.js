import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import ItemMain from './pages/Item/ItemMain';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import AdminMain from './Admin/Main/AdminMain';
import Dashboard from './Admin/Dashboard/Dashboard';
import AdminUser from './Admin/AdminUser/AdminUser';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/user/register" element={<Register/>}/>
          <Route path="/user/home" element={<Home/>}/>
          <Route path="/user/favorite" element={<Favorites/>}/>
          <Route path="/item-main/:id" element={<ItemMain/>}/>
          <Route path="/user/cart" element={<Cart/>}/>
          <Route path="/admin-side/main-page" element={<AdminMain/>}/>
          <Route path="/admin-side/dash" element={<Dashboard/>}/>
          <Route path="/admin-side/users" element={<AdminUser/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
