import React from 'react';
import styles from './Navbar.module.css';
import { MdAccountCircle, MdMenu } from 'react-icons/md';
import { IconButton, styled, Typography,Avatar } from '@mui/material';

function Navbar({ handleSidebar }) {

  return (
    <div className={styles.navbar}>
      <Logo>
        <IconButton>
          <MdMenu onClick={handleSidebar} />
        </IconButton>
        <Typography variant='h6'>Reflection</Typography>
      </Logo>
      <IconButton>
        <Avatar />
      </IconButton>
    </div>
  )
}

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  letterSpacing: '1px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
}))

export default Navbar