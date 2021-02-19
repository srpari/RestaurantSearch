import React from 'react';
import {connect} from 'react-redux';
import '../styles/Details.css';
import '../styles/RestaurantListItem.css';
import UserReviews from './UserReviews';
import {decideColor} from '../utils/decideColor';


const DetailPage= (props) => {

  const restaurant=props.restaurant.restaurant;
  const review =props.restaurant.review;
  const reviewsArr=review.user_reviews.slice(0,5);//starting 5 reviews
  const photo = require('../notAvailable.png');
  return (
    <div className='content-container content'>
        {/* Restaurant details with id of {props.match.params.id} */}
        <img src={restaurant.featured_image || photo} alt='Restaurant-Image' className='featured-image' />
        <h3 tabindex="0" aria-label="Restaurant-Name" className='restaurant-name'>
          {restaurant.name} 
        </h3>

        <span tabIndex="0" aria-label="Rating" className={decideColor(restaurant.user_rating.aggregate_rating)}>{restaurant.user_rating.aggregate_rating}</span>
        <span tabIndex="0" aria-label="Votes"> ({restaurant.user_rating.votes} votes)</span>
        <span tabIndex="0" aria-label="Reviews" className='res_review' >| &nbsp;&nbsp; {review.reviews_count} reviews</span>  
        

        <hr />

        <p tabIndex="0" aria-label="Cuisines" ><strong>Cuisines: </strong>{restaurant.cuisines}</p>
        <p tabIndex="0" aria-label="Cost" ><strong>Cost for two:  </strong> {restaurant.currency}{restaurant.average_cost_for_two}</p>
        <hr />

        <p tabIndex="0" aria-label="Address" ><strong>Address:</strong></p>
        <p tabIndex="0">{restaurant.location.address}</p>
        <hr />

        <p tabIndex="0" aria-label="Reviews"><strong>Reviews</strong></p>
        <UserReviews reviewsArr={reviewsArr} />
        <hr/>
        {/* <button onClick={(e) =>{
             props.history.push(`/review/${props.match.params.id}`);
        }}>View more reviews</button> */}
        
    </div>
  )
}

export const mapStateToProps=(state, props) => {
    return {
        restaurant: state.restaurants.find((restaurant)=> {
            return restaurant.restaurant.id === props.match.params.id; 
            }),
        likes: state.likes
    }
}

export default connect(mapStateToProps)(DetailPage);