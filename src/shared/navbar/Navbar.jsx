import React from 'react';
import styles from './Navbar.module.css';
import { MdAccountCircle, MdMenu } from 'react-icons/md';

function Navbar({ handleSidebar }) {

  return (
    <div className={styles.navbar}>

      <div className={styles.logo}>
        <MdMenu onClick={handleSidebar} />
        Reflection
      </div>
      <div className={styles.profile}>
        <MdAccountCircle />
      </div>
    </div>
  )
}

export default Navbar