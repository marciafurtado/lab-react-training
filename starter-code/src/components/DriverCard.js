import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
    // console.log(props.car.model);
    let imgSize = '100px';
    
    return (
        <div>
            <img src={props.img} style={{ height: imgSize }} />
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}


export default DriverCard;