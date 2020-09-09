import React from 'react';
import './Cart.css';

const Cart = (props) => {

    return (
        <div className="cart-container">
            <h2 >Order Summary</h2>
            <h6>Total Order : {props.enroll.length}</h6>
        <h6 >Total Cost : ${props.totalCost}</h6>
        <button class="btn btn-success">Order Pays</button>

        {
            props.enroll.map(course=>{
                const {title,img,university, price}=course;
                return(
                    <div className="added-cart">

                        <div >
                            <h5 >{title}</h5>
                            <p>{university}</p>
                            <h6 >Price: ${price}</h6>
                        </div>
                        <div>
                            <img src={img} alt=""/>
                        </div>
                    </div>
                )
            })
        }
        
        </div>
    );
};

export default Cart;