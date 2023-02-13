import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {data} from '../../shared/data';


export default function useEmployees() {
   
    const [users, setUsers] = useState(data);
    const [formData,setFormData] = useState({
      fname:'',lname:'',email:'',nic:'',password:'',mobile:'',address:'',
      salary:'',department:'',designation:'',role:'',commission:false,productTitle:'',
      commissionType:'',commissionValue:'10',calcCommission:''
    })
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
      router.push(`/employees/${edit[0].id}`);
      // router.push({ pathname: '/employees/add', query: edit[0] });
    }

    const handleForm = (e)=>{
      
      setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(formData);
    }
    return [handleEdit,handleDelete,handleUser,users,formData,handleForm,handleSubmit];
}
