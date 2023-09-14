import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";

const Profile = () => {

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/${product._id}`;
    navigate(path)
  }

  const [isAddOpen, setIsAddOpen] = useState(false)
  const handleAddSubmit = () => {setIsAddOpen(false)}

  const [isEditOpen, setIsEditOpen] = useState(false)
  const handleEditSubmit = () => {setIsEditOpen(false)}

  return (
    <div id="profile-page">
      <div className='bg-image'></div>
      <div className='profile'>
        <img className='profile-img' src="/img/logo.png" alt="Profile Picture test." />
        <h1>ACCOUNT NAME</h1>
        <h2>Your products:</h2>
        <div id="profile-listings">
          <div className="profile-card">
            <div className="listing-image">
              <img src="/img/logo.png" alt="Logo test to make sure images work" />
            </div>
            <div>
              <p className="listing-title">
                Logo Test
              </p>
              <p className="listing-category">Category, Category</p>
              <p className="listing-price">$50.00</p>

              <div className="profile-listing-edit-delete">
                <i className="fa fa-pen-to-square" onClick={() => {
                  setIsEditOpen(true)
                }}></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="listing-image">
              <img src="/img/logo.png" alt="Logo test to make sure images work" />
            </div>
            <div>
              <p className="listing-title">
                Logo Test
              </p>
              <p className="listing-category">Category, Category</p>
              <p className="listing-price">$50.00</p>

              <div className="profile-listing-edit-delete">
                <i className="fa fa-pen-to-square"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="listing-image">
              <img src="/img/logo.png" alt="Logo test to make sure images work" />
            </div>
            <div>
              <p className="listing-title">
                Logo Test
              </p>
              <p className="listing-category">Category, Category</p>
              <p className="listing-price">$50.00</p>

              <div className="profile-listing-edit-delete">
                <i className="fa fa-pen-to-square"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="listing-image">
              <img src="/img/logo.png" alt="Logo test to make sure images work" />
            </div>
            <div>
              <p className="listing-title">
                Logo Test
              </p>
              <p className="listing-category">Category, Category</p>
              <p className="listing-price">$50.00</p>

              <div className="profile-listing-edit-delete">
                <i className="fa fa-pen-to-square"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="listing-image">
              <img src="/img/logo.png" alt="Logo test to make sure images work" />
            </div>
            <div>
              <p className="listing-title">
                Logo Test
              </p>
              <p className="listing-category">Category, Category</p>
              <p className="listing-price">$50.00</p>

              <div className="profile-listing-edit-delete">
                <i className="fa fa-pen-to-square"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
          <div id="add-listing" className="profile-card" onClick={() => {
            setIsAddOpen(true)
          }}>
            <div>
              <h3>Create New Listing</h3>
              <i id="add-icon" className="fa fa-circle-plus"></i>
            </div>
          </div>
        </div>
      </div>
        {isAddOpen && <AddProduct onFormSubmit={handleAddSubmit} />}
        {isEditOpen && <EditProduct onFormSubmit={handleEditSubmit} />}
    </div>
  )
}

export default Profile
