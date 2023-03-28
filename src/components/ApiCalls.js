export const saveUser=user=>{
    console.log(user)

    

  //  fetch -- inbuild 
  //  axios --- install package

  return fetch("http://localhost:8080/api/v1/user",{
    method: "POST",
    headers:{
    "Content-Type": "application/json"
}
,
    body: JSON.stringify(user)
  }).then(res=>{
    return res.json()
  })

  .catch(err=>{
    console.log(err)
  })


}


export const getAll=()=>{

    return fetch("http://localhost:8080/api/v1/user",{
         method: "GET",
    headers:{
    "Content-Type": "application/json"
}
    }).then(res=>{
        return res.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const deleteByUser=userId=>{
    return fetch("http://localhost:8080/api/v1/user/"+userId,{
         method: "DELETE",
    headers:{
    "Content-Type": "application/json"
}
    }).then(res=>{
        return res.json();
    }).catch(err=>{
        console.log(err)
    })
}
export const deleteByStudent =stdId=>{
     return fetch("http://localhost:8082/students/"+stdId,{
         method: "DELETE",
    headers:{
    "Content-Type": "application/json"
}
    }).then(res=>{
        return res.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const getUserById=userId=>{
    return fetch("http://localhost:8080/api/v1/user/"+userId,{
         method: "GET",
    headers:{
    "Content-Type": "application/json"
}
    }).then(res=>{
        return res.json();
    }).catch(err=>{
        console.log(err)
    })
}


export const updateUser=(user,id)=>{
   

  return fetch("http://localhost:8080/api/v1/user/"+id,{
    method: "PUT",
    headers:{
    "Content-Type": "application/json"
}
,
    body: JSON.stringify(user)
  }).then(res=>{
    return res.json()
  })

  .catch(err=>{
    console.log(err)
  })


}


export const getStudentById =stdId=>{
     return fetch("http://localhost:8082/students/"+stdId,{
         method: "GET",
    headers:{
    "Content-Type": "application/json"
}
    }).then(res=>{
        return res.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const updateStudents=(user,id)=>{
   

  return fetch("http://localhost:8082/students/"+id,{
    method: "PUT",
    headers:{
    "Content-Type": "application/json"
}
,
    body: JSON.stringify(user)
  }).then(res=>{
    return res.json()
  })

  .catch(err=>{
    console.log(err)
  })
}