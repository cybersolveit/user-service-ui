import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { saveUser } from './ApiCalls';

export default function () {
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

    // const handleChange=name=>{
    // }

    const handleSubmit=()=>{
        console.log("form is submitted")
        setResults({...results,"success":false,"error":false,"message":"","errors":[]})
     saveUser(user).then(res=>{
        if(res.statusCode===200){
            setResults({...results,"success":true,message:res.message,error:false})
            setUser({...user,email:"",firstName:"",lastName:"",course:""})
        }else{
            setResults({...results,"error":true,success:false,message:res.message,errors:res.errors})

        }
        
     }).catch(err=>{
        console.log(err)
     })
    //  console.log(results)
    }

  return (

 <Container>
     
      <Row>
        <Col md={{ span: 6, offset: 3 }}>

<h1>Form to Add User by jobi</h1>

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


              <Form style={{width:"50%"}} onSubmit={()=>handleSubmit()}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="PleaseEnter email" onChange={handleEmail} value={email} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Please enter firstname" onChange={handleFirstName} value={firstName}/>
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
        Submit
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>




   
  )
}
