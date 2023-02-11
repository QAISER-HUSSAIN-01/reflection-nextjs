import React, { useState } from 'react';
import Header from '../../src/components/header/Header';
import { data } from '../../src/shared/data';
import styles from './Employees.module.css';
import { MdAccountBalance, MdDelete, MdEdit } from 'react-icons/md';
import { useRouter } from 'next/router';

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
    let edit = temp.filter(item=> item.id === id);
    router.push({pathname:'/employees/add',query:edit[0]});
   }
  
  return (
    <div className={styles.container}>
      <Header heading={"EMPLOYEES LIST"} button={"ADD EMPLOYEE"} to={'/employees/add'} />
     <div className={styles.tableContainer}>
      <table cellSpacing={0} className={styles.table}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>DEPARTMENT</th>
            <th>ACTIONS</th>
          </tr>

        </thead>

        <tbody>

          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <div className={styles.actions}>
                  <MdAccountBalance className={styles.one} onClick={handleUser} />
                  <MdDelete className={styles.two} onClick={() => handleDelete(item.id)} />
                  <MdEdit className={styles.three} onClick={() => handleEdit(item.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
    </div>
  )
}

export default Employees;