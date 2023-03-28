import React, { useEffect, useState } from 'react'
import {  Col, Container, Form, Row,Button, Alert } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'
import { getStudentById, updateStudents } from './ApiCalls';
import CsNav from './Nav'

function UpdateStudents() {
  const {id}= useParams();
  

      const [user,setUser]=useState({
        email:"",
        firstName:"",
        lastName:"",
        course:""
      
    })

     const [results,setResults]=useState({
        success:false,
        error: false,
        errors:[],
        message:""
    
    });
      //destructure
    const {email,firstName,lastName,course}=user;

    useEffect(()=>{
        // get the user by id
        getStudentById(id).then(res=>{           
                setUser({...user,email:res.email,firstName:res.firstName,lastName:res.lastName,course: res.course})
            
        }).catch(err=>{
            console.log(err)
        }
            )
        // set to current user
    },[id])


    const handleEmail=e=>{
       setUser({...user,"email":e.target.value})
    }

    const handleFirstName=e=>{
        setUser({...user,"firstName":e.target.value})
    }

    const handleLastName=e=>{
        setUser({...user,"lastName":e.target.value})
    }
    const handleCourse=e=>{
        setUser({...user,"course":e.target.value})
    }


  const handleSubmit=(event)=>{
      event.preventDefault();
        console.log("form is submitted")
        setResults({...results,"success":false,"error":false,"message":"","errors":[]})
     updateStudents(user,id).then(res=>{
        console.log(res)
       
            setResults({...results,"success":true,error:false})
            setUser({...user,email:"",firstName:"",lastName:"",course:""})
            
        
        
     }).catch(err=>{
        console.log(err)
     })
     console.log(results)
    }


  return (

    <>
     <CsNav/>

 <Container>
 
     
      <Row>
        <Col md={{ span: 6, offset: 3 }}>

<h1>Form to Update Students</h1>
{results.success&&<Navigate to={"/list"} />}
{results.success&&

<Alert variant={"success"}>
          Updated Successfully
        </Alert>
}

{/* {results.error&&

<Alert variant={"danger"}>
          {results.message}
          <br/>
          {results.errors.map(err=>(<p key={err}>{err}</p>))}
        </Alert>
} */}


              <Form  
              onSubmit={(e)=>handleSubmit(e)}
              >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="PleaseEnter email"  value={email} onChange={handleEmail} readOnly/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Please enter firstname" value={firstName} onChange={handleFirstName}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Please enter last name"  value={lastName} onChange={handleLastName}/>
      </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Course</Form.Label>
        <Form.Control type="text" placeholder="Please enter Course" value={course} onChange={handleCourse}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>


</>
  )
}

export default UpdateStudents