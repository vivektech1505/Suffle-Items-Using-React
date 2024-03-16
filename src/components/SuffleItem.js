import React, { useState } from "react";
import './SuffleItem.css'


const SuffleItem = () =>{
    const [items, setItems] = useState([
        "Mango",
        "Banana",
        "Papaya",
        "Fruits",
        "Graphs",
        "Orange"
    ])
   const suffle = () =>{
    const suffled = [...items];
    for(let i = 0; i <suffled.length; i++) {
        let j = Math.floor(Math.random() * (i +1));
        let temp = suffled[i];
        suffled[i] = suffled[j];
        suffled[j] = temp;
    }
    setItems(suffled)
   }


    return(
        <>
        <div className="container">
            <h1 className="header">List of items</h1>
            <ul className="ulItem">
                {items.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
                
            </ul>
           
            <button className="button" onClick={suffle}>Suffle Items</button>
        </div>
        
        </>
        
    )
    
}
export default SuffleItem