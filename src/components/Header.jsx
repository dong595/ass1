import React from 'react';

const Header = ({ menus }) => {
  return (
    <header>
      <div class="banner">
        <img src="https://picsum.photos/900/600" alt="" />
      </div>
      <div className="menu">
        <ul>
          {menus.map((menu) => {
            return (
              <li>
                <a href="">{menu.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
