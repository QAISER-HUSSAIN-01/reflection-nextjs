import React from 'react';
import Heading from '../../src/components/Heading';
import styles from '../../styles/Employees.module.css';
import { Box, Button, ButtonGroup, Checkbox, FormControlLabel, MenuItem, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { MdFileCopy, MdApps } from 'react-icons/md'


function AddEmployee() {

  return (
    <div className={styles.formContainer}>
      <Heading heading={'Add Employee'} />
      <Box component={'form'}>
        <Detail className={styles.detail}>
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

        <Commission className={styles.commission}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="No commission for this employee" />
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <ButtonGroup size='small'>
              <Button size='small' startIcon={<MdFileCopy />}>Clone</Button>
              <Button size='small' startIcon={<MdApps />}>All Packages</Button>
              <Button size='small' startIcon={<MdApps />}>All Products</Button>
            </ButtonGroup>
          </Box>

          <TableContainer>
            <Table sx={{ minWidth: '800px', border:'1px solid lightgrey' }} >
              <TableHead sx={{backgroundColor:'#f4f4f4'}}>
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
    </div>
  )
}

const Detail = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'

}));
const InputGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '10px'
  }
}));

const Commission = styled(Box)(({ theme }) => ({}));

export default AddEmployee;



{/* <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.detail}>
          <div className={styles.pair}>
            <input type="text" placeholder='First Name' name='fname' value={form.name} onChange={handleChange} />
            <input type="text" placeholder='Last Name' name='lname' value={form.name} onChange={handleChange} />
          </div>
          <div className={styles.pair}>
            <input type="email" placeholder='Email' name='email' value={form.email} onChange={handleChange} />
            <input type="text" placeholder='N.I.C' name='nic' value={form.name} onChange={handleChange} />
          </div>
          <div className={styles.pair}>
            <input type="text" placeholder='Password' name='password' value={form.name} onChange={handleChange} />
            <input type="text" placeholder='Mobile No' name='mobile' value={form.name} onChange={handleChange} />
          </div>
          <input type="text" placeholder='Address' name='address' value={form.name} onChange={handleChange} />
          <div className={styles.pair}>
            <input type="text" placeholder='Salary' name='salary' value={form.name} onChange={handleChange} />
            <select name="" id="" className={styles.select}>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
              <option value="">four</option>
              <option value="">five</option>
            </select>
          </div>
          <div className={styles.pair}>
            <input type="text" placeholder='Designation' name='designation' value={form.name} onChange={handleChange} />
            <select name="" id="" className={styles.select}>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
              <option value="">four</option>
              <option value="">five</option>
            </select>
          </div>

        </div>
        <div className={styles.commission}>

          <label htmlFor="" className={styles.checkbox}>
            <input type="checkbox" /> No commission for this employee
          </label>
          <div className={styles.btns}>
            <Link href={''} className={styles.btn}>Clone</Link>
            <Link href={''} className={styles.btn}>All Packages</Link>
            <Link href={''} className={styles.btn}>All Products</Link>
          </div>
          <div className={styles.commissionTableContainer}>
          <table border={1} className={styles.commissionTable}>
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Comm Type</th>
                <th>Comm Value</th>
                <th>Calc Comm</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select name="" id="" className={styles.select}>
                    <option value="paint protection">Paint Protection</option>
                    <option value="paint protection">Paint Protection</option>
                    <option value="paint protection">Paint Protection</option>
                  </select>
                </td>
                <td>
                  <select name="" id="" className={styles.select}>
                    <option value="percent">Percent</option>
                    <option value="percent">Percent</option>
                    <option value="percent">Percent</option>
                  </select>
                </td>
                <td>10</td>
                <td>PKR. 100</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <input type="submit" className={styles.submit} value={query?.id ? 'Update' : 'Add'} />

      </form> */}
