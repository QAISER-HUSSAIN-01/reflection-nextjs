import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

function Header({heading,button,to}) {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>{heading}</div>
        {typeof to === 'string' ? 
        <Link href={to} className={styles.button}>{button}</Link> :
        <button onClick={to} className={styles.button}>{button}</button>
        }
        
    </div>
  )
}

export default Header;