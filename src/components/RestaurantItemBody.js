import React from 'react';
import '../styles/RestaurantListItem.css';
import '../styles/Details.css';
import {decideColor} from '../utils/decideColor';

export default function RestaurantItemBody(props) {
  return (
    <div>
      <div>
      <p tabIndex="0" aria-label="Address" className='addr_name'><strong>Address :</strong> {props.address}</p> 
      <p tabIndex="0" aria-label="CuisineName" className='cui_name'><strong>Cuisines :</strong> {props.cuisines}</p></div>
      <span tabIndex="0" aria-label="Rating" className={decideColor(props.rating)}>{props.rating}</span>
      <span tabIndex="0" aria-label="Votes"> ({props.votes} votes)</span>
      <span tabIndex="0" aria-label="Reviews" className='res_review' >| &nbsp;&nbsp;   {props.reviews_count} reviews</span>  
    </div>
  )
}
