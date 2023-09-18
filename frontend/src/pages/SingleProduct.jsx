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

  const fetchProducts = () => {
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
  }
  
  fetchProducts()

  // Commenting
  const [isWritingNewComment, setIsWritingNewComment] = useState(null);
  const [isEditingComment, setIsEditingComment] = useState(null)
  const [commentText, setCommentText] = useState("");
  const [editCommentText, setEditCommentText] = useState(commentText);

  const handleAddNewComment = () => {setIsWritingNewComment(true)}
  const closeAddNewComment = () => {setIsWritingNewComment(null)}

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
        fetchProducts()
      }
    } catch (error) {
      console.error("Error Adding Comment: ", error);
    }
  };

  const handleEditComment = () => {setIsEditingComment(true)}
  const closeEditComment = () => {setIsEditingComment(null)}

  const handleEditCommentSubmit = async (comment) => {
    console.log("clicked edit comment");
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/comments/products/${product._id}/comments/${comment._id}`, 
        {
          text: editCommentText,
        }
      );
      console.log("axios pass");

      if (response.status === 201) {
        console.log("edit response 201");

        setCommentText("");
        setEditCommentText("");
        closeEditComment(null)
        fetchProducts()
      }
    } catch (error) {
      console.error("Error Updating Workout: ", error);
    }
  }

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
        fetchProducts()
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
        <button onClick={handleAddCommentSubmit}>Add Comment</button>
      </div>
      }

      {product?.comments.length !== 0 ? (product?.comments.map((comment) => (
        <div className="comment" key={comment._id}>
          {isEditingComment ? <>

            <div className="comment-author">
            <div>
              <img src="/img/logo.png" alt="Profile Picture" />
              <p className='author'>{comment.user_id}</p>
              <p className='date'>{formatDistanceToNow(new Date (comment.createdAt), {includeSeconds: true,})}{" "}ago</p>
            </div>
          </div>
          <div className="comment-content">
            <p onClick={closeEditComment}>X</p>
            <textarea value={editCommentText}
            onChange={(e) => {setEditCommentText(e.target.value)}}
            placeholder="Enter your comment message here"></textarea>
            <button onClick={() => {handleEditCommentSubmit(comment)}}>Edit Comment</button>
          </div>
          <p onClick={() => {handleEditComment(comment)}}>Edit</p>
          <p onClick={() => {deleteComment(comment)}}>Delete</p>

          </> : <>

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
          <p onClick={() => {handleEditComment(comment)}}>Edit</p>
          <p onClick={() => {deleteComment(comment)}}>Delete</p>

          </> }
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
