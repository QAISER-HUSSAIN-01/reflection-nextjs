import React, { useState } from 'react';
import Heading from '../../src/components/Heading';
import styles from '../../styles/Employees.module.css';
import { MdAccountBalance, MdDelete, MdEdit } from 'react-icons/md';
import { Box, Button, IconButton, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useEmployees from '../../src/hooks/employees';

function Employees() {
const [handleEdit,handleDelete,handleUser,handleLink,users] = useEmployees();
  
  return (
    <Box sx={{ padding: { lg: '10px', md: '10px', sm: '5px' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Heading heading={"Employees List"} />
        <Button color='warning' variant='contained' size='small' onClick={handleLink}>Add</Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: '800px', border: '1px solid lightgrey' }}>
          <TableHead sx={{ backgroundColor: '#f4f4f4' }}>
            <TableRow>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell>DEPARTMENT</StyledTableCell>
              <StyledTableCell>PHONE</StyledTableCell>
              <StyledTableCell>ACTIONS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item, index) => (
              <TableRow key={index}>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell>{item.email}</StyledTableCell>
                <StyledTableCell>{item.department}</StyledTableCell>
                <StyledTableCell>{item.phone}</StyledTableCell>
                <StyledTableCell>
                  <IconButton><MdAccountBalance className={styles.one} onClick={handleUser} /></IconButton>
                  <IconButton><MdDelete className={styles.two} onClick={() => handleDelete(item.id)} /></IconButton>
                  <IconButton><MdEdit className={styles.three} onClick={() => handleEdit(item.id)} /></IconButton>
                </StyledTableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '10px'
}))
export default Employees;