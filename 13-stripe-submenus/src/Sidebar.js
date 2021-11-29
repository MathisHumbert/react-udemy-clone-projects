import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={`sidebar-wrapper ${isSidebarOpen ? 'show' : null}`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            return (
              <article key={index}>
                <h4>{link.page}</h4>
                <div className="sidebar-sublinks">
                  {link.links.map((link, index) => {
                    const { url, label, icon } = link;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
