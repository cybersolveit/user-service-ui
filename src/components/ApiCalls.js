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