import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
          return (
                    <div>
                              <div className='bannerSection'>
                                        <div className='hero-text'>
                                                  <h2>Best food waiting for you belly</h2>
                                                  <input type="search" id="site-search" name="q" placeholder='search foods items' />

                                                  <button>Search</button>
                                        </div>
                              </div>



                              <div className="container" id='foodMenu'>
                                        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/home/breakfast'>Breakfast</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/home/lunch'>Lunch</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/home/dinner'>Dinner</NavLink>
                              </div>
                    </div>
          );
};

export default Home;