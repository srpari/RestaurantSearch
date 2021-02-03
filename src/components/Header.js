import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
        <div className='App-name'>
          <Link className="App-title" to='/'>
			    	<h1>Find the best Restaurants in city</h1>
          </Link>
        </div>
  )
};