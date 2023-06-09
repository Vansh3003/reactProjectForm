import React, { useState } from "react";


function Form() {
  const [formData, setFormData] = useState({fName:'', lName:'', email:'', password:'' });

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value});
 }

 function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    setFormData({fName:'', lName:'', email:'', password:'' })

 }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Basic Registration Form</legend>
          <label>First Name:  <input type="text" placeholder="enter your fName" name="fName" value={formData.fName} onChange={handleChange} />  </label><br/><br/>
          <label>Last Name:  <input type="text" placeholder="enter your lName" name="lName" value={formData.lName} onChange={handleChange} />  </label><br/><br/>
          <label>Email:  <input type="email" className="email" placeholder="enter your email" name="email" value={formData.email} onChange={handleChange} />  </label><br/><br/>
          <label>Password:  <input type="password" className="password" placeholder="enter your password" name="password" value={formData.password} onChange={handleChange} />  </label><br/><br/>
         <input type="submit"></input>
         
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
