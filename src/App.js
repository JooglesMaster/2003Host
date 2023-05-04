// import React, { } from "react";
// import Usertype from "./Pages/Usertype"
// import Index from "./index"

// import "./CSS/App.css"
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// // import rawData from "./mock-data.json"



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route  path='/' element={<Index />} />
//         <Route path='/Usertype' element={<Usertype />} />
//       </Routes>

//     </BrowserRouter>

//   );
// }


// export default App

import React, { } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Boat from "./Components/Boat_Page"
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import BoatId from "./Components/BoatId"
import Usertype from "./Pages/Usertype"
import Vendor from "./Pages/Vendor"
import Rent from "./Components/Rent"
import User from "./Pages/User"
import Landing from "./Components/Landing"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard";
import Stripe from "stripe";




const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/boat" element={<Boat />} />
        <Route path="/boat/:id" element={<BoatId />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path='/usertype' element={<Usertype />} />
        <Route path='/vendor' element={<Vendor />} />
        <Route path='/user' element={<User />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>


  )
}

export default App
