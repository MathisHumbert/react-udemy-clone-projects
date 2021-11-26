import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const refLinksContainer = useRef(null);
  const refLinks = useRef(null);

  const toggleSidebar = () => {
    setToggle(!toggle);
    const linksHeight = refLinks.current.getBoundingClientRect().height;
    if (toggle) refLinksContainer.current.style.height = `${linksHeight}px`;
    else refLinksContainer.current.style.height = `0px`;
  };

  // useEffect(() => {
  //   const linksHeight = refLinks.current.getBoundingClientRect().height;
  //   if (toggle) refLinksContainer.current.style.height = `${linksHeight}px`;
  //   else refLinksContainer.current.style.height = `0px`;
  // }, [toggle]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          {/* <button className="nav-toggle" onClick={() => setToggle(!toggle)}> */}
          <button className="nav-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={refLinksContainer}>
          <ul className="links" ref={refLinks}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
