require('dotenv').config()

async function savetocloud(event){

  try{

    event.preventDefault();
    const signinDetails={
    email: event.target.email.value,
  
    }
    console.log(signinDetails)
  
  
  
  let serilized_Obj = JSON.stringify(signinDetails);
  
  axios.post(`http://${process.env.SERVER_IP}:3000/password/forgotpassword`,signinDetails)

  .then((Response)=>{
    if(Response.status===201){
      alert('check your Mail')
      document.body.innerHTML += '<div style="color:red;text-align:center;margin-top:70px;">Mail Successfuly sent <div>'
    }else {
      throw new Error('Something went wrong!!!')
    }
  
  })
  
  .catch((err)=>{
     throw new Error('Failed to send link');
  })

  }
    
  
  catch(err){
      document.body.innerHTML+=`<div style="color:red;">${err}<div>`
  }
  
  }