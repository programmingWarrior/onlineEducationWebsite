import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import './course.css';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
const Course = () => {
    const first15 = fakeData.slice(0,15);
    const [course,setCourse] = useState(first15);
    
    
    const [cart,setCart] = useState([]);
    
    
    const handleEnrolledCourse = (course) => {
        
        const newCart = [...cart, course];
        setCart(newCart);
        
    };
    
    
    return (
        <div className="header">
            
            
            <div className="courses-container">
               
              
                  {course.map((item)=><Item handler={handleEnrolledCourse} name={item}></Item>)} ;
                  
              
                
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>


             

            
        </div>
    );
};

export default Course;