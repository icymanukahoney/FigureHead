import { useState } from "react";
import axios from "axios";
import { useProductsContext } from "../hooks/useProductsContext";

const EditProduct = (props) => {

  const {dispatch} = useProductsContext()

  // Form input state variables
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [error, setError] = useState(null);

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;

    if (e.target.checked) {
      setSelectedCategories((prevCategories) => [...prevCategories, categoryName]);
    } else {
      setSelectedCategories((prevCategories) => prevCategories.filter((category) => category !== categoryName)
      );
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem("user"))
    const user_id = user.email

    setImage1(images[0])
    if (images[1]) {setImage2(images[1])}
    if (images[2]) {setImage3(images[2])}

    const formData = new FormData()
    formData.append("title", title)
    formData.append("desc", desc)
    formData.append("price", price)
    formData.append("user_id", user_id)
    formData.append("image1", image1)
    if (image2) {formData.append("image2", image2)}
    if (image3) {formData.append("image3", image3)}
    formData.append("categories", selectedCategories)

    try {
      const response = await axios.post("http://localhost:4000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      setTitle("")
      setDesc("")
      setPrice("")
      setImages(null)
      setSelectedCategories([])
    } catch (error) {
      console.error(error)
      setError(error.message)
    }

    props.onFormSubmit();
  }

  return (
    <div id="edit-product-modal" className="add-edit-modals">
      <form onSubmit={handleSubmit}>
        <h2>EDIT LISTING</h2>
        <div>
          <label>Edit Name *</label>
          <input type="text" placeholder="Add Name Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title} required />
        </div>
        <div>
          <label>Edit Description</label>
          <p><textarea cols="30" rows="10" placeholder="Add Description Here"
          onChange={(e) => setDesc(e.target.value)}
          value={desc} >
          </textarea></p>
        </div>
        <div>
          <label>Edit Price *</label>
          <input type="text" placeholder="Add Name Here" 
          onChange={(e) => setPrice(e.target.value)}
          value={price} required />
        </div>
        <div>
          <label>Edit Images (Up to three) *</label>
          <input type="file" accept="image/*"
          onChange={(e) => setImages(e.target.files[0])} required />
        </div>
        <div>
          <label>Edit Categories *</label>
          <div className="category-flex">
            <div>
              <input type="checkbox" name="category" value="anime"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("anime")} /><label>Anime</label>
              <input type="checkbox" name="category" value="cartoon"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("cartoon")} /><label>Cartoon</label>
              <input type="checkbox" name="category" value="comic"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("comic")} /><label>Comic</label>
            </div>
            <div>
              <input type="checkbox" name="category" value="game"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("game")} /><label>Game</label>
              <input type="checkbox" name="category" value="movie"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("movie")} /><label>Movie</label>
              <input type="checkbox" name="category" value="tv"
              onChange={handleCategoryChange}
              checked={selectedCategories.includes("tv")} /><label>TV Show</label>
            </div>
            <div>
              <button>CANCEL</button>
              <button>EDIT POST</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
