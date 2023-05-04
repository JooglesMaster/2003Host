import React, { useState } from 'react';
import { MdHome,MdFileUpload,MdLogoDev,MdDirectionsBoatFilled,MdEditDocument} from 'react-icons/md';
import { AiFillAccountBook } from "react-icons/ai";
import "../CSS/Dashboard.css"
import boatsData from "../boat-owner.json"
import OwnerCard from '../Components/OwnerCard';



const Sidebar = ({ onChangePage }) => {

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <MdLogoDev className="icon" size={32}  o />
        </div>
        <hr />
        <div className="sidebar-icons">
          <div className="icon-container" onClick={() => onChangePage('Home')}>
            <MdHome className="icon" size={32}  o />
          </div>
          <hr />
          <div className="icon-container"  onClick={() => onChangePage('Upload')}>
            <MdFileUpload className="icon" size={32}  />
          </div>
          <hr />
          <div className="icon-container"  onClick={() => onChangePage('Manage')}>
            <MdDirectionsBoatFilled className="icon" size={32}  />
          </div>
          <hr />
          <div className="icon-container" onClick={() => onChangePage('Notifcation')}>
            <MdEditDocument className="icon" size={32}   />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="boat-company">Dskafos Owner</div>
      <div className="user-info">
        <img
          className="user-avatar"
          src="https://via.placeholder.com/32"
          alt="User Avatar"
        />
        <span className="user-name">John Doe</span>
        <br />
      </div>
    </div>
  );
};

const HomePage = ({ page }) => {
  return (
<div className="home">
  <div className="grid-container">
    <div className="large-card-container">
        <div className="card card-large"><h1>Welcome!</h1><p>
        Welcome to your Boat Management Dashboard.<br/>
        To add a new boat, click 'Upload New Boat' and enter your boats details.<br/>
        In the 'Manage Boats' section, you can efficiently update boat details and monitor their status.<br/>
        Access your account information under the 'My Account' tab, where you can view and edit personal details <br/>
        We strive to provide you with an optimal experience and appreciate your trust in our platform.   
        </p></div>
    </div>
    <div className="small-cards-container">
      <div className="card">
        <div className="content-wrapper">
          <MdFileUpload className="home-icon"/>
          <div className='small-card-text'>
            <h2>Upload</h2>
            <p>This is where you can upload new boats</p>
          </div>
        </div>
      </div>
      <div className="card card-white">
        <div className="content-wrapper">
          <MdDirectionsBoatFilled className="home-icon icon-black"/>
          <div className='small-card-text'>
            <h2>Manage</h2>
            <p>This is where you edit information of boats</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content-wrapper">
          <MdEditDocument className="home-icon"/>
          <div className='small-card-text'>
            <h2>Account</h2>
            <p>Here you can see your account information</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

const UploadPage = ({onAddBoat,handleChangePage } ) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { boatName, address, price, description } = e.target.elements;

    const newBoat = {
      id: Math.floor(Math.random() * 10000), // Generate a random ID
      name: boatName.value,
      location: address.value,
      price: `$${price.value}`,
      description: description.value,
    };

    onAddBoat(newBoat);
    e.target.reset(); 
    handleChangePage('Manage');
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <div>
        <label htmlFor="boatName">Boat Name:</label>
        <input type="text" id="boatName" name="boatName" required />
      </div>
      <div>
        <label htmlFor="address">Location:</label>
        <input type="text" id="address" name="address" required />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required />
      </div>
      <button type="submit">Submit</button>
    </form> 
  );
};



const Manage = ({ boatsData, onUpdate, onDelete }) => {
  return (
    <>
      <div className="manage">
        {boatsData.map((boat) => (
          <OwnerCard key={boat.id} boat={boat} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </div>
    </>
  );
}



const Account = ({ page }) => {
  return (
    <div className="account">
      <div className="account-card">
        <h2>{boatsData.owner.company}</h2>
        <p><b>Services:</b></p>
        <p>{boatsData.owner.services}</p>
        <p><b>Number of boats:</b>:</p>
        <p>{boatsData.owner.boats.length}</p>
        <div className="account-card-buttons">
            <button>Edit</button>
          </div>
      </div>
    </div>
  );
};

const MainPage = ({ page, boatsData, onAddBoat, onUpdate, onDelete,handleChangePage  }) => {
  return (
    <div className="main-page">
      {page === 'Home' && <HomePage />}
      {page === 'Upload' && <UploadPage onAddBoat={onAddBoat} handleChangePage={handleChangePage}/>}
      {page === 'Notifcation' && <Account />}
      {page === 'Manage' && <Manage boatsData={boatsData} onUpdate={onUpdate} onDelete={onDelete} />}
    </div>
  );
};

function Dashboard() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [currentBoatsData, setBoatsData] = useState(boatsData.owner.boats);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const addBoat = (newBoat) => {
    setBoatsData((prevState) => [...prevState, newBoat]);
  };

  const updateBoat = (updatedBoat) => {
    setBoatsData((prevState) =>
      prevState.map((boat) =>
        boat.id === updatedBoat.id ? updatedBoat : boat
      )
    );
  };

  const deleteBoat = (boatId) => {
    setBoatsData((prevState) => prevState.filter((boat) => boat.id !== boatId));
  };

  return (
    <div className="dashboard">
      <TopBar />
      <Sidebar onChangePage={handleChangePage} />
      <MainPage
        page={currentPage}
        boatsData={currentBoatsData}
        onAddBoat={addBoat}
        onUpdate={updateBoat}
        onDelete={deleteBoat}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}
export default Dashboard;