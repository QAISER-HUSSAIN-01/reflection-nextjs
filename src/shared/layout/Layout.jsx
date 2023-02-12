import React, { useEffect, useRef, useState } from 'react';
import styles from './Layout.module.css';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

function Layout({ children }) {
  const [windowSize, setWindowSize] = useState();
  const [windowResize, setWindowResize] = useState();
  const [hide, setHide] = useState('none');
  const [left, setLeft] = useState('-500px');

  const handleSidebar = () => {
    if (windowSize < 600 || windowResize < 600 ) {
      if (left === '-500px') {
        setLeft('0');
        setHide('block');
      } else {
        setLeft('-500px')
        setHide('none');
      }
    } else{
      if (hide === 'block') {
        setHide('none')
      } else {
        setHide('block')
      }
    }
  }

  const handleResize = () => {
    const { innerWidth } = window;
    setWindowResize(innerWidth);
    setWindowSize(innerWidth);
  }

  const handleLoad = () => {
    if (window.innerWidth < 600) {
      setHide('block')
    } else {
      setHide('none')
    }
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    handleLoad();
    window.addEventListener('resize', handleResize);
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.navbarContainer}>
        <Navbar handleSidebar={handleSidebar} />
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sidebarContainer} style={{ left: left }} >
          <Sidebar hide={hide} />
        </div>
        <div className={styles.contentContainer}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;