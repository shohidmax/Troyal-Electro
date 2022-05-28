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
import Purches from './Component/Pages/Purches/Purches';
import Manageorder from './Component/Pages/Myorder/Manageorder';
import { ToastContainer } from 'react-toastify';
import RequireAdmin from './Component/Shaired/RequireAdmin';
import Payment from './Component/Pages/Dashboard/Payment';
import Updateprofile from './Component/Pages/Myprofile/Updateprofile';
import Profilecard from './Component/Pages/Myprofile/Profilecard';
// import ManageProduct from './Component/Pages/Myorder/ManageProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
        
        
        <Route path='/myprotfolio' element={<Myprotfolio/>}></Route>
        <Route path='/purches/:id' element={<Requireauth><Purches/></Requireauth>}></Route>
       
        
        <Route path='/manageallorders' element={<ManageallOrders/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        
        <Route path='/makeadmin' element={<MakeAdmin/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/updateprofile' element={<Updateprofile></Updateprofile>}></Route>
        
        
        
        
        <Route path='/Signup' element={<Signup></Signup>}></Route> 
        <Route path='/dashboard' element={<Requireauth><Dashboard/></Requireauth>}>
              <Route index element={<Myprofile/>}></Route>
              <Route path='/dashboard/myorder' element={<Requireauth><Myorder/></Requireauth>}></Route>
              <Route path='/dashboard/myprofile' element={<Myprofile/>}></Route>
              <Route path='/dashboard/profilecard' element={<Profilecard/>}></Route>
              <Route path='/dashboard/myprofile' element={<Requireauth><ManageProduct/></Requireauth>}></Route>
              <Route path='/dashboard/manageallorders' element={<Requireauth><RequireAdmin><ManageallOrders/></RequireAdmin></Requireauth>}></Route>
              <Route path='/dashboard/makeadmin' element={<Requireauth><RequireAdmin><MakeAdmin/></RequireAdmin></Requireauth>}></Route>
              <Route path='/dashboard/addreview' element={<Requireauth><Addreview/></Requireauth>}></Route>
              <Route path="payment/:id" element={<Requireauth><Payment></Payment></Requireauth>}></Route>
              <Route path='/dashboard/addItem' element={<Requireauth><RequireAdmin><AddItem/></RequireAdmin></Requireauth>}></Route>
              <Route path='/dashboard/users' element={<Requireauth><Users></Users></Requireauth>}></Route>
              <Route path='/dashboard/manageorder' element={<Requireauth><Manageorder></Manageorder></Requireauth>}></Route>
              <Route path='/dashboard/manageproduct' element={<RequireAdmin><ManageProduct/></RequireAdmin>}></Route>
        </Route> 
        <Route path='/Updatepassword' element={<UpdatePassword></UpdatePassword>}>SignUp</Route> 
        <Route path='/passwordreset' element={<Passwordreset></Passwordreset>}>SignUp</Route> 
        <Route path='*' element={<Notfound></Notfound>}>not found</Route>
      </Routes>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
