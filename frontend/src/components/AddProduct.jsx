import React from 'react'

const AddProduct = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault()

    props.onFormSubmit();
  }

  return (
    <div id="add-product-modal" className="add-edit-modals">
      <form onSubmit={handleSubmit}>
        <h2>ADD LISTING</h2>
        <div>
          <label>Name *</label>
          <input type="text" placeholder="Add Name Here" />
        </div>
        <div>
          <label>Description</label>
          <p><textarea cols="30" rows="10" placeholder="Add Description Here"></textarea></p>
        </div>
        <div>
          <label>Price *</label>
          <input type="text" placeholder="Add Name Here" />
        </div>
        <div>
          <label>Images (Up to three) *</label>
          <input type="file" />
        </div>
        <div>
          <label>Categories *</label>
          <div className="category-flex">
            <div>
              <input type="checkbox" name="category" value="anime" /><label>Anime</label>
              <input type="checkbox" name="category" value="cartoon" /><label>Cartoon</label>
              <input type="checkbox" name="category" value="comic" /><label>Comic</label>
            </div>
            <div>
              <input type="checkbox" name="category" value="game" /><label>Game</label>
              <input type="checkbox" name="category" value="movie" /><label>Movie</label>
              <input type="checkbox" name="category" value="tv" /><label>TV Show</label>
            </div>
            <div>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
