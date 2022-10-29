import React from 'react';
import { useState } from 'react';

const AddUser = () => {

    const [user,setUser]=useState({name:'default', email:'de@gmail.com'})
    const handleAddUser=(event)=>{
        event.preventDefault()
        console.log(user)





        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('user added successfully')
                event.target.reset()
            }
        })
    }





    const handleInputBlur=(event)=>{
        const value=event.target.value;
        const field=event.target.name;
        const newUser={...user}
        newUser[field]=value;
        setUser(newUser)
      
    }




    return (
        <div>
            <h1>please add a user</h1>

            <form  onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name="email" id="" placeholder='email' required />
                <br />

                <input onBlur={handleInputBlur} type="adress" name="adress" id="" placeholder='address' required />
                <br />

                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <br />
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;