import React, { useState } from 'react';
import Heading from '../../src/components/Heading';
import { data } from '../../src/shared/data';
import styles from '../../styles/Employees.module.css';
import { MdAccountBalance, MdDelete, MdEdit } from 'react-icons/md';
import { useRouter } from 'next/router';
import { Box, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Employees() {
  const [users, setUsers] = useState(data);
  const router = useRouter();
  const handleUser = () => { }

  const handleDelete = (id) => {
    let temp = [...users];
    let findIndex = temp.findIndex(item => item.id === id);
    temp.splice(findIndex, 1);
    setUsers(temp);
  }

  const handleEdit = (id) => {
    let temp = [...users];
    let edit = temp.filter(item => item.id === id);
    router.push('/employees/add');
    // router.push({ pathname: '/employees/add', query: edit[0] });
  }

  return (
    <Box sx={{padding:{lg:'10px',md:'10px',sm:'5px'}}}>
      <Heading heading={"Employees List"} />
      <TableContainer >
        <Table sx={{ minWidth: '800px', border:'1px solid lightgrey' }}>
          <TableHead sx={{backgroundColor:'#f4f4f4'}}>
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
                    <MdAccountBalance className={styles.one} onClick={handleUser} />
                    <MdDelete className={styles.two} onClick={() => handleDelete(item.id)} />
                    <MdEdit className={styles.three} onClick={() => handleEdit(item.id)} />
                </StyledTableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
</Box>
  )
}
const StyledTableCell = styled(TableCell)(({theme})=>({
     padding:'10px'
}))
export default Employees;