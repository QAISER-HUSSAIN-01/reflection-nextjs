import React, { useState } from 'react';
import Heading from '../../src/components/Heading';
import styles from '../../styles/Employees.module.css';
import { MdAccountBalance, MdDelete, MdEdit } from 'react-icons/md';
import { Box, Button, IconButton, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useEmployees from '../../src/hooks/employees/useEmployees';
import Link from 'next/link';
function Employees() {
  const [handleEdit, handleDelete, handleUser, users] = useEmployees();

  return (
    <Box sx={{ padding: { lg: '20px 40px', md: '20px 40px', sm: '20px', xs:'10px'} }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Heading heading={"Employees List"} />
        <Link href={'/employees/add'} style={{ textDecoration: 'none' }}>
          <Button color='warning' variant='contained' size='small'>Add</Button>
        </Link>
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
                  <IconButton onClick={() => handleUser()} ><MdAccountBalance className={styles.one} /></IconButton>
                  <IconButton onClick={() => handleDelete(item.id)}><MdDelete className={styles.two}  /></IconButton>
                  <IconButton onClick={() => handleEdit(item.id)}><MdEdit className={styles.three}  /></IconButton>
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