import React from 'react';
import './Course.css';

const Course = (props) => {
    const {title, university, price, img} = props.course;
    return (
        <div className="box-course">
            <div>
            <img src={img} alt=""/>
            <h4 className="text-primary">{title}</h4>
            <p class="text-secondary">{university}</p>
            <h5 class="text-warning">Price: ${price}</h5>
            <button  onClick={()=>props.enrollHandler(props.course)} class="btn btn-success">Enroll now</button>
            </div>
        </div>
    );
};

export default Course;