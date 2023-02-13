import React from 'react';
import Heading from '../../src/components/Heading';
import styles from '../../styles/Employees.module.css';
import { Box, Button, ButtonGroup, Checkbox, FormControlLabel, MenuItem, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { MdFileCopy, MdApps } from 'react-icons/md'
import useScreen from '../../src/hooks/screen';
import Link from 'next/link';

function AddEmployee() {
  const [screenWidth, fixedWidth] = useScreen();
  return (
    <Box sx={{ padding: { lg: '20px 40px', md: '20px 40px', sm: '20px', xs: '10px' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Heading heading={'Add Employee'} />
        <Link href={'/employees'} style={{ textDecoration: 'none' }}>
          <Button color='warning' variant='contained' size='small'>  Add </Button>
        </Link>
      </Box>
      <Box component={'form'}>
        <Detail component={'div'} className={styles.detail} variant="subtitle2">
          <InputGroup>
            <TextField id="filled-basic" label="First Name" variant="filled" fullWidth size='small' />
            <TextField id="filled-basic" label="Last Name" variant="filled" fullWidth size='small' />
          </InputGroup>
          <InputGroup>
            <TextField id="filled-basic" label="Email" variant="filled" fullWidth size='small' />
            <TextField id="filled-basic" label="N.I.C" variant="filled" fullWidth size='small' />
          </InputGroup>
          <InputGroup>
            <TextField id="filled-basic" label="Password" variant="filled" fullWidth size='small' />
            <TextField id="filled-basic" label="Mobile No" variant="filled" fullWidth size='small' />
          </InputGroup>
          <TextField id="filled-basic" label="Address" variant="filled" fullWidth size='small' />
          <InputGroup>
            <TextField id="filled-basic" label="Salary" variant="filled" fullWidth size='small' />
            <TextField id="filled-basic" label="Department" variant="filled" fullWidth size='small' select >
              <MenuItem key={'one'} value={'one'}>One</MenuItem>
              <MenuItem key={'two'} value={'two'}>Two</MenuItem>
              <MenuItem key={'three'} value={'three'}>Three</MenuItem>
            </TextField>
          </InputGroup>
          <InputGroup>
            <TextField id="filled-basic" label="Designation" variant="filled" fullWidth size='small' />
            <TextField id="filled-basic" label="System Role" variant="filled" fullWidth size='small' select>
              <MenuItem key={'one'} value={'one'}>One</MenuItem>
              <MenuItem key={'two'} value={'two'}>Two</MenuItem>
              <MenuItem key={'three'} value={'three'}>Three</MenuItem>
            </TextField>
          </InputGroup>
        </Detail>

        <Commission component={'div'} className={styles.commission} variant="subtitle2">
          <FormControlLabel control={<Checkbox defaultChecked />} label="No commission for this employee" />
          <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '10px' }}>
            <ButtonGroup size='small' fullWidth={screenWidth < 600 ? true : fixedWidth < 600 ? true : false} orientation={screenWidth < 600 ? 'vertical' : fixedWidth < 600 ? 'vertical' : 'horizontal'}>
              <Button size='small' startIcon={<MdFileCopy />}>Clone</Button>
              <Button size='small' startIcon={<MdApps />}>All Packages</Button>
              <Button size='small' startIcon={<MdApps />}>All Products</Button>
            </ButtonGroup>
          </Box>

          <TableContainer>
            <Table sx={{ minWidth: '800px', border: '1px solid lightgrey' }} >
              <TableHead sx={{ backgroundColor: '#f4f4f4' }}>
                <TableRow >
                  <TableCell>Prodcut Title</TableCell>
                  <TableCell>Comm Type</TableCell>
                  <TableCell>Comm Value</TableCell>
                  <TableCell>Calc Comm</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ paddingX: '5px', paddingY: '0px' }}>
                    <TextField id="filled-basic" label="Paint Protection" variant="outlined" fullWidth size='small' select >
                      <MenuItem key={'one'} value={'one'}>One</MenuItem>
                      <MenuItem key={'two'} value={'two'}>Two</MenuItem>
                    </TextField>
                  </TableCell>
                  <TableCell sx={{ paddingX: '5px', paddingY: '0px' }}>
                    <TextField id="filled-basic" label="Percent" variant="outlined" fullWidth size='small' select >
                      <MenuItem key={'one'} value={'one'}>One</MenuItem>
                      <MenuItem key={'two'} value={'two'}>Two</MenuItem>
                    </TextField>
                  </TableCell>
                  <TableCell sx={{ paddingX: '5px', paddingY: '0px' }}>
                    <TextField id="filled-basic" value={10} variant="outlined" fullWidth size='small' />
                  </TableCell>
                  <TableCell>one</TableCell>
                  <TableCell>one</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </Commission>

      </Box>
    </Box>
  )
}

const Detail = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '30px'

}));
const InputGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '10px'
  }
}));

const Commission = styled(Typography)(({ theme }) => ({
  marginTop: '30px'
}));

export default AddEmployee;

