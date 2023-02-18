import React from 'react';
import './Header.css';
import logo from '../../../images/logo2.png';
import cartIcon from '../../../images/icons/Path 1.png';
import { Link } from 'react-router-dom';

const Header = () => {
          return (
                    <nav class="navbar navbar-expand-lg bg-body-white ">
                              <div className="container d-flex align-items-center mb-3">
                                        <div className="me-auto p-2">
                                                  <img style={{height: 45}} src={logo} alt="onion logo" />
                                              
                                        </div>
                                        <div className='p-2 navPart2'>
                                                  <img src={cartIcon} alt="" />
                                                  <Link to='/login' >Login</Link>
                                                  <Link to='/signup' >SignUp</Link>
                                        </div>
                              </div>
                    </nav>
          );
};

export default Header;