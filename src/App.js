import logo from './logo.svg';
import './App.css';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Component/Pages/Blogs/Blogs';
import About from './Component/Pages/About/About';
import Login from './Component/Pages/User/Login/Login';
import Signup from './Component/Pages/User/Signup/Signup';
import Requireauth from './Component/Shaired/Requireauth';
import Notfound from './Component/Notfound/Notfound';
import { ToastContainer } from 'react-toastify';
import UpdatePassword from './Component/Pages/User/UpdatePassword/UpdatePassword';
import Passwordreset from './Component/Pages/User/Passwordreset/Passwordreset';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
import Myprofile from './Component/Pages/Myprofile/Myprofile';
import Myprotfolio from './Component/Pages/Myprotfolio/Myprotfolio';
import Myorder from './Component/Pages/Myorder/Myorder';
import ManageProduct from './Component/Pages/ManageProduct/ManageProduct';
import ManageallOrders from './Component/Pages/ManageallOrders/ManageallOrders';
import MakeAdmin from './Component/Pages/MakeAdmin/MakeAdmin';
import Addreview from './Component/Pages/Addreview/Addreview';
import AddItem from './Component/Imventry/AddItem/AddItem';
import Addproduct from './Component/Imventry/Addproduct';
import Tools from './Component/Pages/Tools/Tools';
import Review from './Component/Pages/Review/Review';
import Users from './Component/Pages/Dashboard/Users';

function App() {
  return (
    <div className="App">
      <h1>please connect you have only 12hour </h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
        
        
        <Route path='/myprotfolio' element={<Myprotfolio/>}></Route>
       
        <Route path='/manageProduct' element={<ManageProduct/>}></Route>
        <Route path='/manageallorders' element={<ManageallOrders/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        
        <Route path='/makeadmin' element={<MakeAdmin/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        
        <Route path='/Signup' element={<Signup></Signup>}></Route> 
        <Route path='/dashboard' element={<Dashboard/>}>
              <Route index element={<Myprofile/>}></Route>
              <Route path='/dashboard/myorder' element={<Myorder/>}></Route>
              <Route path='/dashboard/myprofile' element={<Myprofile/>}></Route>
              <Route path='/dashboard/myprofile' element={<ManageProduct/>}></Route>
              <Route path='/dashboard/manageallorders' element={<ManageallOrders/>}></Route>
              <Route path='/dashboard/makeadmin' element={<MakeAdmin/>}></Route>
              <Route path='/dashboard/addreview' element={<Addreview/>}></Route>
              <Route path='/dashboard/addItem' element={<AddItem/>}></Route>
          
        </Route> 
        <Route path='/Updatepassword' element={<UpdatePassword></UpdatePassword>}>SignUp</Route> 
        <Route path='/passwordreset' element={<Passwordreset></Passwordreset>}>SignUp</Route> 
        <Route path='*' element={<Notfound></Notfound>}>not found</Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
