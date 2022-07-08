import React from 'react';
import { Link } from 'react-router-dom';
import Undrawbooks from '../assets/Undraw_Books.svg';

const Landing = () => {
  return (
    <section id='landing'>
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Australia's most awarded online library platform</h1>
            <h2>Frind your dream book with <span className='purple'> Library</span> </h2>
            <Link to="#features">
              <button className='btn'>Browse Books</button>
            </Link>
          </div>
          <figure className='header__img--wrapper'>
            <img src={Undrawbooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
