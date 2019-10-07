import React from 'react';
import '../scss/_header.scss';
import settingsIcon from '../assets/icons/settings.svg';

function Header() {
  return (
    <div className='Header'>
      <header>
        <h1>
          {'<'} Titus Blog <span>{'/'}</span>{'>'}
        </h1>
        <nav>
          <ul>
            <li>
              <img id='setting-icon' src={settingsIcon} alt='settings icon' />
            </li>
            <li>
              <a href='#'>home</a>
            </li>
            <li>
              <a href='#'>articles</a>
            </li>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
