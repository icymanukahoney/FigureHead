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

  // Commenting
  const [isWritingNewComment, setIsWritingNewComment] = useState(null);
  const [commentText, setCommentText] = useState("");

  const handleAddNewComment = async () => {
    setIsWritingNewComment(true)
  }

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/comments/products/${product._id}/comments`,
        {
          text: commentText,
          user_id: user_id,
        }
      );

      if (response === 201) {
        const newComment = response.data;
        const updatedComments = [...product.comment, newComment];
        const updatedProduct = { ...product, comments: updatedComments };

        dispatchEvent({ type: "UPDATE_PRODUCT", payload: updatedProduct });

        setCommentText("");
      }
    } catch (error) {
      console.error("Error Adding Comment: ", error);
    }
  };

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

      <div 
      onClick={handleAddNewComment}>
        <p className="comment-header">Write a comment</p><i className="fa fa-pencil"></i>
      </div>

      {isWritingNewComment && 
      <div className="new-comment">
        <textarea cols={30} rows={30}></textarea>
        <button onClick={handleAddCommentSubmit}></button>
      </div>
      }

      {product.comments.length !== 0 ? (product.comments.map((comment) => ( 
        <div className="comment">
          <div className="comment-author">
            <div>
              <img src="/img/logo.png" alt="Profile Picture" />
              <p className='author'>{comment.user_id}</p>
              <p className='date'>{formatDistanceToNow(new Date (comment.createdAt), {includeSeconds: true,})}{" "}ago</p>
            </div>
          </div>
          <div className="comment-content">
            <p>{comment.text}</p>
          </div>
        </div>
        ))
        ) : (
          <div><h3>No Comments To Show</h3></div>
        )}
      </div>

      <div id="mobile-buy-button">
        <div><h2>${product?.price}.00</h2><p>inc GST</p></div>
        <div onClick={handleBuy}><button><h2><i className="bi bi-cart"></i>BUY NOW</h2></button></div>
      </div>
    </div>
  )
}

export default SingleProduct
