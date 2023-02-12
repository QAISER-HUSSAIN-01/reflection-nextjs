import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {data} from '../shared/data';
export default function useEmployees() {
   
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
    const handleLink = () => {
      router.push('/employees/add')
    }
   

    return [handleEdit,handleDelete,handleUser,handleLink,users];
}