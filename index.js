
const formData={
    name: "Steve",
    email: "steve@steve.com",
}
const submitData =(name,email)=> {
    const configurationObject={
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(
     formData
    ),
  };
  
   return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then((data)=> {
    console.log(data);
   document.body.innerHTML += data.id;
   // document.body.innerHTML=data['id'];
  })
  .catch(function(error){
//console.log(error.document.body.innerHTML)
document.body.innerHTML += error.message;
//document.body.innerHTML=error.message
 })

    // .catch( function ( error ) {
    //   document.body.innerHTML = error.message;
    //});

}

