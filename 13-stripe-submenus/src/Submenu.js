import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { submenuItem, isSubmenuOpen, coordinates } = useGlobalContext();
  const [links, setLinks] = useState([]);
  const [col, setCol] = useState(0);
  useEffect(() => {
    if (!submenuItem) {
      setLinks([]);
    } else {
      setLinks(submenuItem);
      setCol(submenuItem.links.length);
    }
  }, [submenuItem]);

  return (
    <aside
      className={`submenu ${isSubmenuOpen ? 'show' : null}`}
      style={{ top: `${coordinates.top}px`, left: `${coordinates.left}px` }}
    >
      <section>
        <h4>{links.page}</h4>
        <div className={`submenu-center col-${col}`}>
          {links.length === 0
            ? null
            : links.links.map((link, index) => {
                const { label, icon, url } = link;
                return (
                  <a href={url} key={index}>
                    {icon}
                    {label}
                  </a>
                );
              })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
