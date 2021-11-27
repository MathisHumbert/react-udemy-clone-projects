import React, { useState, useContext } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';

const AppContext = React.createContext();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      <Home />
      <Modal />
      <Sidebar />
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { App, AppContext, useGlobalContext };
