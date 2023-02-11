import React, { useState } from 'react';
import Header from '../../src/components/header/Header';
import { data } from '../../src/shared/data';
import { useRouter } from 'next/router';
import styles from './Employees.module.css';
import Link from 'next/link';

function AddEmployee() {
  const router = useRouter();
  const { query } = router;

  const [form, setForm] = useState({
    id: query?.id || '',
    name: query?.name || '',
    email: query?.email || '',
    department: query?.department || ''
  });

  const handleSubmit = () => {
    console.log('submit button clicked');
    let temp = [...data];
    let updated = temp.map((item, index) => {
      if (item.id === form.id) {
        return { id: form.id, name: form.name, email: form.email, department: form.department }
      }
      return item;
    })
    console.log(updated);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.formContainer}>
      <Header heading={query?.id ? 'Update Employee' : 'Add Employee'} button={query?.id ? 'Update' : 'Add'} to={handleSubmit} />
      <form onSubmit={handleSubmit} className={styles.form}>
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

      </form>

    </div>
  )
}

export default AddEmployee