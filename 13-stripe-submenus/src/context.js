import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [submenuItem, setSubmenuItem] = useState('');
  const [isSubmenuOpen, setIsSubmenuOpen] = useState('');
  const [coordinates, setCoordinates] = useState(0);

  const openSubmenu = (e) => {
    const sublink = e.target.textContent;
    const sublinkItems = sublinks.find((item) => item.page === sublink);
    const place = e.target.getBoundingClientRect();
    const left = (place.left + place.right) / 2;
    const top = place.bottom - 3;
    setCoordinates({ top, left });
    setSubmenuItem(sublinkItems);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        submenuItem,
        isSubmenuOpen,
        coordinates,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
