import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users= useLoaderData()
    console.log(users)

    const handleDelete=(user)=>{
        const agree=window.confirm(`are you sure you want to delete:${user.name}`)
        console.log(agree)
        if(agree){
            console.log('deleting user ', user._id)

            // fetch(`http://localhost:5000/users/${user._id}`,{
            //     method:'DELETE'
            // })
            // .then(res=>res.json())
            // .then(data=>console.log(data))
           

        }

    }
    return (
        <div>
            <h1>users: {users.length}</h1>
            {
                users.map(user=><p key={user._id}>{user.name}  {user.email} <button onClick={()=>handleDelete(user)}>X</button></p>)
            }
        </div>
    );
};

export default Home;