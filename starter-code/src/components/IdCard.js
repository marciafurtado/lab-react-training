import React from 'react';

const IdCard = (props) => {
    // console.log(props);
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth}</p>
            <img src={props.picture} />
        </div>
    )
}


export default IdCard;