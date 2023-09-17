import { useState, useEffect } from "react";
import axios from "axios";
import { useProductsContext } from "../hooks/useProductsContext";

const AddProduct = (props) => {

  const {dispatch} = useProductsContext()

  // Form input state variables
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("images state updated", images);
  }, [images])

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

    const formData = new FormData()
    formData.append("title", title)
    formData.append("desc", desc)
    formData.append("price", price)
    formData.append("user_id", user_id)

    // Error catch for Images and categories
    if (images.length === 0) {
      setError("Must have images")
      return
    }
    if (selectedCategories.length === 0) {
      setError("Must have at least 1 category selected")
      return
    }
    // If passed all checks, remove any current errors on screen
    setError(null)

    images.forEach((imageFile) => {
      formData.append("images", imageFile)
    })

    // Log out each image from the formData
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

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
      setImages([])
      setSelectedCategories([])
      
      if (response.status === 200) {
        console.log("New Product Posted!", response.data);

        dispatch({type:"CREATE_PRODUCTS", payload: response.data})
        props.onFormSubmit();
      } else {
        throw Error("Server Error")
      }

    } catch (error) {
      console.error(error)
      setError(error.message)
    }
  }

  return (
    <div id="add-product-modal" className="add-edit-modals">
      <form onSubmit={handleSubmit}>
        <h2>ADD LISTING</h2>
        <div>
          <label>Name *</label>
          <input type="text" placeholder="Add Name Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title} required />
        </div>
        <div>
          <label>Description</label>
          <p><textarea cols="30" rows="10" placeholder="Add Description Here"
          onChange={(e) => setDesc(e.target.value)}
          value={desc} >
          </textarea></p>
        </div>
        <div>
          <label>Price *</label>
          <input type="number" placeholder="$0.00" 
          onChange={(e) => setPrice(e.target.value)}
          value={price} required />
        </div>
        <div>
          <label>Images (Up to three) *</label>
          <input 
          type="file" 
          accept="image/*"
          multiple
          onChange={(e) => setImages([...e.target.files])}/>
        </div>
        <div>
          <label>Categories *</label>
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
              <button>SUBMIT</button>
            </div>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
