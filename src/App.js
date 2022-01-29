import './App.css';
import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.jsx";
import FullName from "./Component/Profile/FullName.jsx";
import Address from "./Component/Profile/Address.jsx";
const App =()=>(
   <div className="App">
    <ProfilePhoto />
   <div className="description">
   <FullName />
   <Address />
   </div>
      </div>
);
export default App;
