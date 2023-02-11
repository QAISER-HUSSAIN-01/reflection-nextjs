import React, { useState } from 'react';
import styles from './Layout.module.css';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

function Layout({children}) {
  const [hide, setHide] = useState('none')
  const handleSidebar = ()=>{
    if(hide === 'block'){
      setHide('none')
    }else{
      setHide('block')
    }
  }
  return (
    <div className={styles.layout}>
        <div className={styles.navbarContainer}>
            <Navbar handleSidebar={handleSidebar} />
        </div>
        <div className={styles.sectionContainer}>
        <div className={styles.sidebarContainer} >
            <Sidebar hide={hide}/>
        </div>
        <div className={styles.contentContainer}>
        {children}
        </div>
        </div>
    </div>
  )
}

export default Layout;