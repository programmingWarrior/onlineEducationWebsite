import React from 'react';
import './item.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    
    const{title,address,img,price} = props.name;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (

        <div className="items-total">
                 <div className="item-img">
                    <img src={img} alt=""/>
                </div>

            <div className="item-other">
                <h3>{title}</h3>
                <p><small>Google</small></p>
                <p>{address}</p>
                <p className='price'>${price}</p>
                <button onClick={() => props.handler(props.course)}className="btn" >{element} Enrolled Now</button>

            </div>
        </div>
    );
};

export default Item;