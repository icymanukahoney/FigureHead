import { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";

const SingleProduct = () => {
  const navigate = useNavigate()
  const {dispatch} = useProductsContext()

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
  const [isEditingComment, setIsEditingComment] = useState(null)
  const [commentText, setCommentText] = useState("");

  const handleAddNewComment = async () => {
    setIsWritingNewComment(true)
  }

  const closeAddNewComment = () => {
    setIsWritingNewComment(false)
  }

  const handleAddCommentSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/comments/products/${product._id}/comments`,
        {
          text: commentText,
          user_id: product.user_id,
        }
      );

      if (response.status === 201) {
        console.log("response 201");
        const newComment = response.data;
        const updatedComments = [...product.comments, newComment];
        const updatedProduct = { ...product, comments: updatedComments };

        dispatch({ type: "UPDATE_PRODUCT", payload: updatedProduct });

        setCommentText("");
        setIsWritingNewComment(false)
      }
    } catch (error) {
      console.error("Error Adding Comment: ", error);
    }
  };

  const deleteComment = async (comment) => {
    console.log(product._id);
    console.log(comment._id);
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/comments/products/${product._id}/comments/${comment._id}`
      )
      console.log("after axios");
      const json = await response.data
      if (response.status === 201) {
        console.log(json);
        dispatch({ type: "UPDATE_PRODUCT", payload: product.comments});
      }
    } catch (error) {
      console.error("Error Deleting Comment: ", error);
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
      <div className="new-comment-inputs">
        <p onClick={closeAddNewComment}>X</p>
        <label>Comment Text:</label>
        <textarea value={commentText} 
        onChange={(e) => {setCommentText(e.target.value)}}
        placeholder="Enter your comment message here"></textarea>
        <button onClick={handleAddCommentSubmit}>Comment</button>
      </div>
      }

      {product?.comments.length !== 0 ? (product?.comments.map((comment) => ( 
        <div className="comment" key={comment._id}>
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
          <p onClick={() => {deleteComment(comment)}}>Delete</p>
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
