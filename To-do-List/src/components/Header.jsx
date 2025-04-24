import React, { useState } from 'react'
import '../components/header.css';

function Header({ isDark, setIsDark }) {
    // const store=localStorage.setItem("darkmode",JSON.stringify(isDark));
    // console.log(store);
    

    function changeMode() {
        setIsDark(!isDark);
        localStorage.setItem("isDarkMode",!isDark);  
    }
    return (
        <div className={isDark ? "app dark" : "app"}>
            <div className="header">
                <div className="logo-title">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/todo-list--v1.png" alt="logo" className="logo" />
                    <h1 className="title">My To-Do List</h1>

                </div>
                <button className='toggle-btn' 
                    onClick={changeMode}
                >{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
            </div>

        </div>
    );

}

export default Header