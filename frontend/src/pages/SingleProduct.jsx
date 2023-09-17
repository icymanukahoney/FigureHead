import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate()

  const handleBuy = () => {
    navigate('/payment');
  }

  const {id} = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:4000/api/products/${id}`)
    .then((res) => {
      console.log(res.data);
      setProduct(res.data)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  return (
    <div id="product-page">
      <div className='bg-image'></div>

      <div id="product">

        <img src={`http://localhost:4000/public${product?.images[0]}`} alt={product?.title} className="main-img product-img" />
        
        {product?.images[1] && <img src={`http://localhost:4000/public${product?.images[1]}`} alt={product?.title} className="second-img product-img" />}

        {product?.images[2] && <img src={`http://localhost:4000/public${product?.images[2]}`} alt={product?.title} className="third-img product-img" />}

        <h2>{product?.title}</h2>
        <div className="product-details">
          <p>Product By: {product?.user_id}</p>
          <p>Price: ${product?.price}.00</p>
          <p>{product?.categories.join(", ")}</p>
        </div>
        <div className="product-aside">
          <i className="fa fa-heart"></i>
        </div>
        <div className="product-description">
          <p>{product?.desc}</p>
        </div>
      </div>
      <div id="comment-flex">

      <div><p className="comment-header">Write a comment</p><i className="fa fa-pencil"></i></div>

      <div className="comment">
          <div className="comment-author">
            <div>
              <img src="/img/logo.png" alt="Profile Picture" />
              <p className='author'>AUTHOR NAME</p>
              <p className='date'>DATE POSTED</p>
            </div>
          </div>
          <div className="comment-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed ut rerum aliquam deserunt quam repellat illum molestiae! Quidem, fugit.</p>
          </div>
        </div>
        
        <div className="comment">
          <div className="comment-author">
            <div>
              <img src="/img/logo.png" alt="Profile Picture" />
              <p className='author'>AUTHOR NAME</p>
              <p className='date'>DATE POSTED</p>
            </div>
          </div>
          <div className="comment-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates omnis dolores cumque deleniti, iste aperiam atque quas exercitationem. Voluptatem, optio laudantium? Numquam voluptas odio consectetur recusandae asperiores enim animi quibusdam veniam ab, totam, laudantium vero praesentium eos suscipit quod.</p>
          </div>
        </div>

      </div>

      <div id="mobile-buy-button">
        <div><h2>${product?.price}.00</h2><p>inc GST</p></div>
        <div onClick={handleBuy}><button><h2><i className="bi bi-cart"></i>BUY NOW</h2></button></div>
      </div>
    </div>
  )
}

export default SingleProduct
