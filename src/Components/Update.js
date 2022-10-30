import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser=useLoaderData()

    const [user,setUser]=useState(storedUser)
    const handleUpdateUser=(event)=>{
        event.preventDefault()
        console.log(user)





    }





    const handleInputChange=(event)=>{
        const value=event.target.value;
        const field=event.target.name;
        const newUser={...user}
        newUser[field]=value;
        setUser(newUser)
      
    }



    return (
        <div>
            <h1>pleae update:{storedUser.name}</h1>

            <form  onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="text" name="email" id="" placeholder='email' required />
                <br />

                <input onChange={handleInputChange} defaultValue={storedUser.address} type="adress" name="adress" id="" placeholder='address' required />
                <br />

                <input onChange={handleInputChange} type="text" name='name' defaultValue={storedUser.name} placeholder='name' required />
                <br />
                <br />
                <button type='submit'>Update User</button>
            </form>


        </div>
    );
};

export default Update;