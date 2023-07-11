import React, { useEffect, useState } from "react";
import Rating from "../Rating/rating";
import MessageBox from "../Error/messageBox";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { PRODUCT_REVIEW_CREATE_RESET } from "../../redux/constants/productConstants";
import { createReview } from "../../redux/actions/productActions";
import "./Reviews.css"
import Swal from "sweetalert2";

function Reviews() {
  // const params = useParams();
  // const { id: productId } = params;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { userInfo } = useSelector((state) => state.userSignin);

  const product = useSelector((state) => state.products.product);

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const dispatch = useDispatch();

  
  useEffect(() => {
    if (successReviewCreate) {
      Swal.fire("Review Submitted Successfully"); 
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
      window.location.reload()
    }
    if (errorReviewCreate){
      Swal.fire(errorReviewCreate)
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });      
    }
  }, [dispatch, successReviewCreate, errorReviewCreate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(product._id, { rating, comment, name: userInfo.name },userInfo.token)
      );
      setRating("");
      setComment("");
    } else {
      Swal.fire("Please enter comment and rating"); 
    }
  };

  return (
    <div name="containerReviews" className="containerReviews">
      <h1 id="reviews">Reviews</h1>
      {product?.reviews?.length === 0 && (
        <MessageBox>There are no customer reviews</MessageBox>
      )}
      <ul>
        {!loadingReviewCreate && product?.reviews?.map((review) => (
          <li key={review._id}>
            <strong>{review.name}</strong>
            <Rating rating={review.rating} caption=" "></Rating>
            <p>{review.createdAt.substring(0, 10)}</p>
            <p>{review.comment}</p>
          </li>
        ))}
        </ul>
        <li className="NotSign">
          { userInfo?._id ?  (
            <form className="form" onSubmit={submitHandler}>
              <div>
                <h2>Write a customer review</h2>
              </div>
              <div>
                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1- Poor</option>
                  <option value="2">2- Fair</option>
                  <option value="3">3- Good</option>
                  <option value="4">4- Very good</option>
                  <option value="5">5- Excelent</option>
                </select>
              </div>
              <div>
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label />
                <button className="primary" type="submit">
                  Submit
                </button>
              </div>
              <div>
                {loadingReviewCreate && <Loader/>}                
              </div>
            </form>
          ) : (
            <MessageBox>
              Please <Link to="/login">Sign In</Link> to write a review
            </MessageBox>
          )}
        </li>
      
    </div>
  );
}

export default Reviews;
