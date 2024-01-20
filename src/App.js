
import './App.css';
import Topbar from './component/topbar/Topbar'
import Sidebar from './component/sidebar/Sidebar';
import Home from './component/pages/home/Home';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import UserList from './component/pages/userList/UserList';
import User from './component/pages/user/User';
import NewUser from './component/pages/newUser/NewUser';
import ProductList from './component/pages/productList/ProductList';
import Product from './component/pages/product/Product';
import NewProduct from './component/pages/newProduct/NewProduct';
function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
       <Routes>
          <Route exact path='/' element = {<Home/>} />   
          <Route path='/users' element = {<UserList/>} />   
          <Route path='/user/:userId' element = {<User/>} />   
          <Route path='/newUser' element = {<NewUser/>} />   
          <Route path='/products' element = {<ProductList/>} />   
          <Route path='/product/:productId' element = {<Product/>} />   
          <Route path='/newproduct' element = {<NewProduct/>} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
