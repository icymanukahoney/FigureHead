// imports
// import { useState, useEffect } from "react";
// import axios from "axios";
// import link from "react-router-dom";

// import context

// import components

const Home = () => {
  // Define state variables
  // const [products, setProducts] = useState([]);
  // const [selectCategory, setSelectedCategory] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch product data from api call
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4000/api/products");
  //       const product = response.data;

  //       // update the products state with the products data
  //       setProducts(product);
  //     } catch (error){ console.error("Error fetching product data:", error);

  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // Make an API request to fetch product data
  // Update the products state with fetched data

  // Handle category selection
  // Filter products based on the selected category

  return (
    <>
      {/* background image - whats new advert - weekly deal advert */}
      <div className="background-mobile"></div>
      <div className="logo-hero-mobile"></div>
      <div className="whats-new-mobile">
        <h3>WHATS NEW !</h3>
        <h2>NIA</h2>
        <h2>"Xenoblade Chronicles 2"</h2>
        <h3>GOOD SMILE COMPANY</h3>
      </div>
      <div className="weekly-deal-mobile">
        <h3>WEEKLY DEAL !</h3>
        <h2>$10</h2>
        <h2>GIFT VOUCHER</h2>
        <p>With your first plushie listing this week!</p>
      </div>
      {/* categories drop down select */}
      <div className="categories-container-mobile">
        <select>
          <option value="">Categories</option>
          <option value="game">Game</option>
          <option value="movie">Movie</option>
          <option value="tv show">Tv Show</option>
          <option value="anime">Anime</option>
          <option value="cartoon">Cartoon</option>
          <option value="comic">Comic</option>
          <option value="plushie">Plushie</option>
          <option value="other">Other</option>
        </select>
      </div>

      <p>SHOWING: 3 of 3</p>

      {/* product grid section */}
      <div className="product-grid ">
        <div className="product-item">
          <h3>Title</h3>
          <p>Category:</p>
          <p>Price:</p>
        </div>
      </div>
    </>
  );
};

export default Home;
