import React, { useEffect, useState } from 'react'
import {  Col, Container, Form, Row,Button, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getUserById, updateUser } from './ApiCalls';
import CsNav from './Nav'

function Update() {
  const {id}= useParams();
  

      const [user,setUser]=useState({
        email:"",
        firstName:"",
        lastName:"",
      
    })

     const [results,setResults]=useState({
        success:false,
        error: false,
        errors:[],
        message:""
    
    });
      //destructure
    const {email,firstName,lastName}=user;

    useEffect(()=>{
        // get the user by id
        getUserById(id).then(res=>{
            console.log(res)
            if(res.statusCode===200){
                setUser({...user,email:res.data.email,firstName:res.data.firstName,lastName:res.data.lastName})
            }
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


  const handleSubmit=(event)=>{
      event.preventDefault();
        console.log("form is submitted")
        setResults({...results,"success":false,"error":false,"message":"","errors":[]})
     updateUser(user,id).then(res=>{
        if(res.statusCode===200){
            setResults({...results,"success":true,message:res.message,error:false})
            setUser({...user,email:"",firstName:"",lastName:"",course:""})
        }else{
            setResults({...results,"error":true,success:false,message:res.message,errors:res.errors})

        }
        
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

<h1>Form to Update User</h1>

{results.success&&

<Alert variant={"success"}>
          {results.message}
        </Alert>
}

{results.error&&

<Alert variant={"danger"}>
          {results.message}
          <br/>
          {results.errors.map(err=>(<p key={err}>{err}</p>))}
        </Alert>
}


              <Form  
              onSubmit={(e)=>handleSubmit(e)}
              >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="PleaseEnter email"  value={email} onChange={handleEmail}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Please enter firstname" value={firstName} onChange={handleFirstName}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Please enter last name"  value={lastName} onChange={handleLastName}/>
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

export default Update