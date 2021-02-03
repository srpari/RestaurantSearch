import React from 'react';
import '../styles/HomePage.css';
import Search from './Search';

const HomePage = (props) => (
  <div>  
    <Search {...props}/>
  </div>
)
      
export default HomePage;
