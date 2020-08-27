import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
const Course = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] = useState(first10);
    
   
    console.log(first10);
    
    return (
        <div>
            
    <h1>Course:{products.length}</h1>
             

            
        </div>
    );
};

export default Course;