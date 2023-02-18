import React from 'react';
import './Home.css'

const Home = () => {
          return (
                    <div className='bannerSection'>
                              <div className='hero-text'>
                                        <h2>Best food waiting for you belly</h2>
                                        <input type="search" id="site-search" name="q" placeholder='search foods items' />

                                        <button>Search</button>
                              </div>
                    </div>
          );
};

export default Home;