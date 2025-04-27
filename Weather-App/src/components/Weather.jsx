import React, { useEffect, useState } from 'react'

function Weather() {
    const[data, setData]=useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then((response)=>response.json())
        .then((data)=>
            {
                setData(data)
                console.log(data)}
        )
    }, [])

    // async function apicall() {
    //     const user = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await user.json(); 
    //     setData(data); 
    //     console.log(data); 
    // }

    // apicall(); 

  return (
    <div>
    <div>Weather</div>
    
    {
        data.map((user, i)=>
            // console.log(user);
            <li key={i}>{user.name}</li>
        )
    }
    </div>

  )
}

export default Weather