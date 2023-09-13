import React from 'react'

const Profile = () => {
  return (
    <div id="profile-page">
      <div className='bg-image'></div>
      <div className='profile'>
        <img className='profile-img' src="/img/logo.png" alt="Profile Picture test." />
        <h1>ACCOUNT NAME</h1>
        <h2>Your products:</h2>
        <div id="profile-listings">
          <div className="profile-card">
            <div>
              <img src="#" alt="Image of the figurine" />
            </div>
            <div>
              <p className="listing-title">
                Dungeons & Dragons: Gelatinous Cube POP! Vinyl
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
          <div id="add-listing" className="profile-card">
            <div>
              <h3>Create New Listing</h3>
              <i id="add-icon" className="fa fa-circle-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
