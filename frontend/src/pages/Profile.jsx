import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import { useProductsContext } from "../hooks/useProductsContext";

const Profile = () => {
  const {dispatch} = useProductsContext()
  const [products, setProducts] = useState([])

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/${product._id}`;
    navigate(path)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:4000/api/products")

      // check if response is OK (200)
      if (response.status === 200) {
        console.log(response.data);
        setProducts(response.data);
        dispatch({type: "SET_PRODUCTS", payload: response.data})
      }
    }

    fetchProducts()
  }, [])

  const [isAddOpen, setIsAddOpen] = useState(false)
  const handleAddSubmit = () => {setIsAddOpen(false)}

  const [isEditOpen, setIsEditOpen] = useState(false)
  const handleEditSubmit = () => {setIsEditOpen(false)}

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/products/${id}`)

      const json = await response.data
      if (response.status === 200) {
        console.log(json);
        dispatch({type: "DELETE_PRODUCT", payload:json})
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id="profile-page">
      <div className='bg-image'></div>
      <div className='profile'>
        <img className='profile-img' src="/img/logo.png" alt="Profile Picture test." />
        <h1>ACCOUNT NAME</h1>
        <h2>Your products:</h2>
        <div id="profile-listings">
          {products && products.map((product) => {
            // const user = JSON.parse(localStorage.getItem("user"))
            // const user_id = user.email
            const user_id = "ryan@test"
            if (product.user_id === user_id) {
              return (
                <div className="profile-card" key={product._id}>
                  <div className="listing-image">
                    <img src={`http://localhost:4000/public${product.images[0]}`} alt={product.title} />
                  </div>
                  <div>
                    <p className="listing-title">
                      {product.title}
                    </p>
                    <p className="listing-category">
                      {product.categories.map((category) => {
                        return (category)
                      })}
                    </p>
                    <p className="listing-price">${product.price}.00</p>

                    <div className="profile-listing-edit-delete">
                      <i className="fa fa-pen-to-square" onClick={() => {
                        setIsEditOpen(true)
                      }}></i>
                      <i className="fa fa-trash" onClick={() => {
                        handleDelete(product._id)
                      }}></i>
                    </div>
                  </div>
                </div>
              )
            }
          })}
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
