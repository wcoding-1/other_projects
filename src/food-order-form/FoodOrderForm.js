import React, { useState } from "react";

function FoodOrderForm() {
  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [address , setAddress] = useState('');
  const [order1 , setOrder1] = useState('');
  const [order2 , setOrder2] = useState('');
  const [order3 , setOrder3] = useState('');

  const handleSubmit = () =>{
    alert(
      `Order Successful! \n
      Your order was ${order1}${order2}${order3} \n
      Please show your confirmation number for pickup.
    
    `)
  }

  const main = {
    width: '50%',
    margin: '0 auto',

  }

  const form ={
    width: '30%',
    margin: '0 auto',
  }

  return (
        <div style={main}>
          <form onSubmit={handleSubmit} style={form}>
            <label htmlFor='username'>Name</label><br />
            <input type='text' name='name' id='username'  value={name} onChange={({target})=> setName(target.value)}/>
            <br />
            <br />
            <label htmlFor='userphone'>Phone</label><br />
            <input type='number' name='number' id='usernumber' value={phone} onChange={({target})=> setPhone(target.value)}/>

            <br />
            <br />
             
            <input type='checkbox' name='number' id='Shakshuka' value='Shakshuka' onChange={({target})=> setOrder1(target.value)}/>
            <label htmlFor='Shakshuka'>Shakshuka</label><br />

            <input type='checkbox' name='number' id='aghetti Carbonara' value='aghetti Carbonara' onChange={({target})=> setOrder2(target.value)}/>

            <label htmlFor='aghetti Carbonara'>aghetti Carbonara</label><br />
            
            <input type='checkbox' name='number' id='Margherita Pizza' value='Margherita Pizza' onChange={({target})=> setOrder3(target.value)}/>
            <label htmlFor='Shakshuka'>SMargherita Pizza</label><br />


            <br />
            <br />
            <label htmlFor='useraddress'>Address</label><br />
            <input type='address' name='address' id='useraddress' value={address} onChange={({target})=> setAddress(target.value)}/>
            <br />
            <br />
           
            <input type='submit' name='submit' value='Order'  />

          </form>
        </div>
  )
}

export default FoodOrderForm;