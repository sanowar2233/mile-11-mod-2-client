import React, { useReducer, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users= useLoaderData()
    const [displayusers, setDisplayusers]=useState(users)
    console.log(users)

    const handleDelete=(user)=>{
        const agree=window.confirm(`are you sure you want to delete:${user.name}`)
        console.log(agree)
        if(agree){
            // console.log('deleting user ', user._id)

            fetch(`http://localhost:5000/users/${user._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                if(data.deletedCount > 0){
                    alert('delete successfully')

                    const remainingUsers=displayusers.filter(usr=>usr._id !==user._id)
                    setDisplayusers(remainingUsers)
                }
            })

           

        }

    }
    return (
        <div>
            <h1>users: {displayusers.length}</h1>
            {
               displayusers.map(user=><p key={user._id}>{user.name}  {user.email} 
               <Link to={`/update/${user._id}`}><button>Update</button></Link>
               <button onClick={()=>handleDelete(user)}>X</button></p>)
            }
        </div>
    );
};

export default Home;