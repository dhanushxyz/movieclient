import  Axios  from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import '../cssfiles/userdetail.css';

function Userdetails() {
    var email1 =localStorage.getItem("email");
    const [email, setemail] = useState(email1);
    const [data, setdata] = useState([]);
    
    
    
    
        Axios.post("http://localhost:3001/use",{
            
            email : email
        }).then((res)=>{
            setdata(res.data)
        })
            
          
    
    return (
        
        
        
        <div>
            
                {data.map((val,key)=>{
                    return(
                        <div className='container1'>
                            <div>
                            <div className='center'>
                                <h3>Ticket id : {val.booking_id}</h3>
                            </div>
                            <div className='det'>
                                No of tickets : {val.no_of_tickets}
                            </div>
                            <div className='det'>
                                Cost: {val.cost}
                            </div>
                            <div className='det'>
                                Movie name : {val.movie_name}
                            </div>
                            <div className='det'>
                                date booked : {val.booked_date}
                            </div>
                            </div>
                        </div>
                    )
                })}
                
            
        </div>
    )
}

export default Userdetails
