import React from 'react'
import Formulariologin from './Formulariologin';
import Login from './Login';
import Dataset from './Dataset';
export default function layoutlogin() {
    return (
        <div>
           <Login/>    
           <Formulariologin/>
           <Dataset/>
        </div>
    )
}
