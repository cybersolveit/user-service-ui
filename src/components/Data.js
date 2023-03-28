import React, { useEffect, useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { getAll, deleteByUser,deleteByStudent } from './ApiCalls';
import CsNav from './Nav'

function Data() {

    const [users,setUsers]=useState([])
    const [students,setStudents]=useState([]);
    const [results,setResults]=useState({
        success:false,errors:"",
        message:""
    })

    const {success,errors,message}=results;

    useEffect(()=>{
        getAll().then(res=>{
            // console.log(res)
            setUsers(res.data.users)
            setStudents(res.data.students)
        }).catch(err=>{
            console.log(err)
        })
        console.log("useEffect")
    },[message])


    const deleteUser=(userId)=>{
        console.log(userId+ "deleting")
        deleteByUser(userId).then(res=>{
            if(res.statusCode===200){
                setResults({...results,success:true,message:res.message})
            }else{
                setResults({...results,success:true,message:res.message})
            }
        }).catch(err=>{
            console.log(err)
        })
    }

        const deleteStudents=(stdId)=>{
        console.log(stdId+ "deleting")
        deleteByStudent(stdId).then(res=>{
            console.log(res)
                setResults({...results,success:true,message:res})
           
        }).catch(err=>{
            console.log(err)
        })
    }



  return (
    <div>
    <CsNav/>


    <div style={{margin:"10px"}}>

    {message&&

<Alert variant={"success"}>
          {results.message}
        </Alert>}

    <h1>User list:</h1>



    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>User Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {users&&
      users.map(user=>(
        <tr key={user.user_id}>
          <td>{user.user_id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>
          <Link to={"/user/update/"+user.user_id}><Button variant='success' >Update</Button></Link>
          <Button variant='warning' onClick={()=>deleteUser(user.user_id)}>Delete</Button>
          
          </td>
        </tr>
      ))
      }
        
       
      </tbody>
    </Table>




<h1>Student list:</h1>
    </div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Std Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Added By</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      {students&&students.map(std=>(
<tr key={std.studentId}>
          <td>{std.studentId}</td>
          <td>{std.firstName}</td>
          <td>{std.lastName}</td>
          <td>{std.email}</td>
          <td>{std.course}</td>
          <td>{std.addedBy}</td>
          <td>

          <Link to={"/student/update/"+std.studentId}>
<Button variant='success'>Update</Button>
          </Link>  
          <Button variant='warning' onClick={()=>deleteStudents(std.studentId)}>Delete</Button>
          </td>
        </tr>
      ))}
        
       
      </tbody>
    </Table>
   </div>
  )
}

export default Data