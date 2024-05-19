
import React ,{useState}from 'react'

const container = {
  display:'flex',
  justifyContent: 'space-around'
}

function StudentForm(){
  const [userInput, setUserInput] = useState('');

  const handleInput = ({target}) =>{
   
    setUserInput(target.value)
         
  }



  return(
  <>
    <div style={container}>
      <div>

        <h1>Student's Form</h1>

        <form onChange={handleInput}> 
          <label for='fname'>First Name</label><br/>
          <input type='text' name='Fname' placeholder='name'/>
          <br/>
          <br/>
          <label for='lname'>Last Name</label><br/>
          <input type='text' name='lname' placeholder=''/>
          <br/>
          <br/>
          <label for='age'>Agee</label><br/>
          <input type='number' name='num' placeholder=''/>
          <br/>
          <br/>
          <label for='addr'>Address</label><br/>
          <input type='address' name='addr' placeholder=''/>
          <br/>
          <br/>
          <label for='clnum'>Class number</label><br/>
          <input type='number' name='classnum' placeholder=''/>
          <br/>
          <br/>
          <label for='id'>ID</label><br/>
          <input type='text' name='id' placeholder=''/>
          <br/>
          <br/>
          <input type='radio' name='lunch' placeholder='' value='poutry'/>
          <label for='lun'>Lunch</label>
          <input type='radio' name='lunch' placeholder='' value='fry chicken'/>
          <label for='lun'>Lunch</label><br/>
        </form>
      </div>

     <div>
      <h3>Informations About Students</h3>
   
        <p>{userInput}</p>
      </div>
    </div>
  </>
  )
}

export default StudentForm;