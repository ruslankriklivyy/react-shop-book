import React from 'react';
import { useSelector } from 'react-redux';
import logoPng from '../assets/img/logo.png';
import rubleSvg from '../assets/img/ruble.svg';
import shopCartSvg from '../assets/img/cart.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <img src={logoPng} alt="logo" />
          </Link>
          <Link to="/cart" className="header__button">
            <button className="button button--header">
              <span>
                <b>{totalPrice}</b> <img src={rubleSvg} alt="ruble svg" />
              </span>
              <span>
                <img src={shopCartSvg} alt="shop cart svg" />
                <b>{totalCount}</b>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
