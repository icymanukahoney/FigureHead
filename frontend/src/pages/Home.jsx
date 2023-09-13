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

  // Filter products based on the selected category
  // useEffect(() => {
  //   if (!selectedCategory) {
  //     // if there is no category chosen then display all products.
  //     setFilteredProducts(products);
  //   } else {
  //     // filter through the array and display only the selected category
  //     const filtered = products.filter((product) =>
  //       product.category.toLowerCase().includes(selectedCategory.toLowerCase())
  //     );
  //     setFilteredProducts(filtered);
  //   }
  // }, [selectedCategory, products]);

  return (
    <>
      {/* background image - whats new advert - weekly deal advert */}
      <div className="background-mobile">
        <img src="#" alt="background-coins-mobile" />
      </div>
      <div className="logo-hero-mobile">
        <img src="#" alt="hero-logo-withText" />
      </div>

      {/* give whats-new-title width of 70% keep left aligned and use padding to create background color.  */}
      <h3 className="whats-new-title-mobile">WHATS NEW !</h3>

      {/* right align text in whats-new-mobile div below. give width of div around 70% */}
      <div className="whats-new-mobile">
        <h2 className="whats-new-info-one">NIA</h2>
        <h2 className="whats-new-info-one">"Xenoblade Chronicles 2"</h2>
        <h3 className="whats-new-info-two">GOOD SMILE COMPANY</h3>
      </div>

      {/* give weekly-deal-title width of around 70% keep left aligned and use padding to create background color.  */}
      <h3 className="weekly-deal-title">WEEKLY DEAL !</h3>

      {/* right align text in weekly-deal-mobile div below. give width of div around 70% */}
      <div className="weekly-deal-mobile">
        <h2 className="weekly-deal-info-one">$10</h2>
        <h2 className="weekly-deal-info-one">GIFT VOUCHER</h2>
        {/* font for info-two needs to be italic or light italic whichever looks best font size should be low (14 on figma) up to you */}
        <p className="weekly-deal-info-two">
          With your first plushie listing this week!
        </p>
      </div>

      {/* Handle category selection */}
      {/* categories drop down select */}
      <div className="categories-container-mobile">
        <select
        // value={selectedCategory}
        // onChange={(e) => setSelectedCategory(e.target.value)}
        >
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
      {/* <p>SHOWING: {filteredProducts.length} of {products.length}</p> */}

      {/* product grid section */}
      <div className="product-grid ">
        {/* may have to link product-item so it takes you to the single product page and loads the id */}
        <div className="product-item">
          {/* <Link key={product._id} to={`/SingleProduct/${product._id}`}> */}
          <img src="#" alt="image of product" />
          <h3>Title</h3>
          <p>Category:</p>
          <p>Price:</p>
          <img src="#" alt="heart icon from font awesome" />
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

// POSSIBLE CODE SET UP FOR CATEGORY FILTER RENDER

{
  /* <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-item" key={index}>
            <Link key={product._id} to={`/SingleProduct/${product._id}`}>
            <img src="#" alt="image of product" />
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <img className="heart-image" src="#" alt="heart icon from font awesome" />
            </Link>
          </div>
        ))}
      </div> */
}

export default Home;
