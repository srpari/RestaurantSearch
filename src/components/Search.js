import React from 'react';
import {connect} from 'react-redux';
import {setCity} from '../actions/city';
import { resetState } from '../actions/city';
import {thunkRestaurants} from '../actions/restaurant';
import '../styles/Summary.css';
 
const Search = (props) => {
  console.log('Search comp props', props);
  return (
    <div className='content-container content'>
      <div className='page-header' tabIndex="0">
        <span className="visually-hidden">Select city</span>
        <h2 className="page-header_title">Select city</h2>
      </div>
     
      {/* <div className='button-container'> */}
        {
          props.city.map((item, index)=>{
            return <>
            <button id={index} key={index} aria-label={item} className = 'cypress-wrapper'  
              onClick={(e)=>{
              props.dispatch(resetState());
              props.dispatch(setCity(e.target.innerText));
              props.dispatch(thunkRestaurants(e.target.innerText, 1));
              props.history.push('/listing');
            }} >  
              {item}
              </button>
              {/* Simulation for simple accessability testing */}
              <div className="cypress-wrapper visually-hidden" aria-hidden="true">
                  Intentional Failure for A11Y
              </div>
            </>
          })
        }
      {/* </div> */}
    </div>
  )
}

Search.defaultProps={
  city: ['Toronto', 'Ottawa', 'Montreal', 'Quebec']
}

export default connect()(Search);