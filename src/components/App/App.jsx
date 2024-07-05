import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import Products from '../Products/Products';
import Productdetails from '../Productdetails/Productdetails';
import Notfound from '../Notfound/Notfound';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {Online, Offline} from 'react-detect-offline';
import Create from '../DashboardTest/Create';
import Update from '../DashboardTest/Update';
import DashboardTest from '../DashboardTest/DashboardTest';
import CreateProduct from '../DashboardTest/CreateProduct';
import UpdateProduct from '../DashboardTest/UpdateProduct';
import HomeUser from '../DashboardTest/HomeUser';
import HomeProduct from '../DashboardTest/HomeProduct';



function App() {
const [userData, setUserData] = useState(null);

// decode token to get user Data
  let saveUserData= ()=>{
    let encodedToken = localStorage.getItem('token');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };

// prevent refresh behaviour set null to userData but the user has data in localstorage
useEffect(()=>{
  if(localStorage.getItem('token'))
  {
    saveUserData();
  }
}, []);

// in logout remove data from localstorage, got to home page
let logoutUser = ()=>{
  // localStorage.removeItem('token');
  localStorage.clear();
  window.location.reload()
  setUserData(null);
  return <Navigate to='/' />

};
//  routes
  let routes = createHashRouter([
    {path:'/', element:<Layout userData={userData} logoutUser={logoutUser}/>, errorElement:<Notfound />, children:[
      {index:true, element:<Home userData={userData}/>},
      {path:'login', element:<ProtectedRoute userData={userData}><Login saveUserData={saveUserData}/></ProtectedRoute>},
      {path:'register', element:<ProtectedRoute userData={userData}><Register /></ProtectedRoute>},
      {path:'products', element:<ProtectedRoute userData={userData}><Products /></ProtectedRoute>},
      {path:'productdetails/:id', element:<ProtectedRoute userData={userData}><Productdetails /></ProtectedRoute>},
      {path:'cart', element:<ProtectedRoute userData={userData}><Cart userData={userData}/></ProtectedRoute>},
      {path:'profile', element:<ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute>},
      {path:'dashboardtest', element:<ProtectedRoute userData={userData}><DashboardTest userData={userData}/></ProtectedRoute>},
      {path:'manageproduct', element:<ProtectedRoute userData={userData}><HomeProduct /></ProtectedRoute>},
      {path:'manageuser', element:<ProtectedRoute userData={userData}><HomeUser /></ProtectedRoute>},
      {path:'create', element:<ProtectedRoute userData={userData}><Create /></ProtectedRoute>},
      {path:'createproduct', element:<ProtectedRoute userData={userData}><CreateProduct /></ProtectedRoute>},
      {path:'update/:id', element:<ProtectedRoute userData={userData}><Update /></ProtectedRoute>},
      {path:'updateproduct/:id', element:<ProtectedRoute userData={userData}><UpdateProduct /></ProtectedRoute>}
    ]}
  ])
  return (
    <>
    <div>
    <ToastContainer
position="bottom-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    {/* <RouterProvider router={routes} /> */}
      <Online>
        <RouterProvider router={routes} />
      </Online>
      <Offline >
        <div className='d-flex justify-content-center align-items-center vh-100 bg-secondary text-center'>
        <div >
          <h1> you are offline </h1>
          <br />
          <h1>check your internet connection</h1>
        </div>
        </div>
       </Offline>
    </div>
    </>
  );
}

export default App;
