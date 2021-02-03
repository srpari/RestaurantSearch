import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/RestaurantListItem.css';
import '../styles/Details.css';
import RestaurantItemBody from '../components/RestaurantItemBody';

const photo = require('../notAvailable.png');
const RestaurantListItem = (props)=> {
  return (
      <div className='media content content-container'>
            <div className='media-left'>
            <Link to={`/detail/${props.restaurant.id}`} >
              <img src={props.restaurant.thumb || photo} alt='Thumbnail_Img_Restaurant' className='media-left__image'/></Link>
            </div>
            <div className='media-body'>
            <Link to={`/detail/${props.restaurant.id}`} ><h3 className='restaurant-name res_name'>{props.restaurant.name}</h3> </Link>
            
            <RestaurantItemBody 
            address={props.restaurant.location.address}
            cuisines={props.restaurant.cuisines}
            rating={props.restaurant.user_rating.aggregate_rating} 
            votes={props.restaurant.user_rating.votes} 
            reviews_count={props.review.reviews_count}/>   
            {/* <RestaurantItemBody rating={props.restaurant.user_rating.aggregate_rating} votes={props.restaurant.user_rating.votes} reviews_count={props.review.reviews_count}/>        */}
            </div>
      </div>
    
  )
}
export default RestaurantListItem;