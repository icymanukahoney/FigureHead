import React from 'react'

const Profile = () => {
  return (
    <div id="profile-page">
      <div className='bg-image'></div>
      <div>
        <img src="#" alt="Background image of a figurine collection wall." />
        <h1>ACCOUNT NAME</h1>
        <h2>Listings</h2>
        <div id="profile-listings">
          <div className="profile-card">
            <div>
              <img src="#" alt="Image of the figurine" />
            </div>
            <div>
              <p className="listing-title">
                Dunegons & Dragons: Gelatinous Cube POP! Vinyl
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
            <div>
              <img src="#" alt="Image of the figurine" />
            </div>
            <div>
              <p className="listing-title">
                Dunegons & Dragons: Gelatinous Cube POP! Vinyl
              </p>
              <p className="listing-category">Category, Category</p>
              <p className="listing-price">$50.00</p>

              <div className="profile-listing-edit-delete">
                <i className="fa fa-pen-to-square"></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
          <div id="add-listing" className="profile-card">
            <div>
              <h3>Create New Listing</h3>
              <i className="fa fa-circle-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
