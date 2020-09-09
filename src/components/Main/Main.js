import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    let totalCost = 0;
    const [course, setCourse] = useState(fakeData);
    const [enroll, setEnroll] = useState([]);

    const enrollHandler = (handle) =>{
        let newEnroll = [...enroll, handle];
        setEnroll(newEnroll)
    }
    enroll.map((data) =>{
        totalCost = totalCost + data.price;
      });
    return (
        <div className="container">
            <div className="course-container">
                {
                    course.map(course => <Course enrollHandler={enrollHandler} course={course} key={course.id}></Course> )
                }
            </div>
            <div className="cart-container">
                <Cart totalCost={totalCost} enroll={enroll} key={course.id} ></Cart>
            </div>
        </div>
    );
};

export default Main;