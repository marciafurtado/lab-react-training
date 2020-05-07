import React from 'react';

const CreditCard = (props) => {
    // console.log(props);
    let cardColor = `${props.bgColor}`
    let textColor = `${props.color}`
    let imgSize = '20px'
    return (
        <div style={{backgroundColor: cardColor, color: textColor}}>
        <img src={props.imgPath} style={{ height: imgSize }} />
            <p>{props.number}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            
        </div>
    )
}

export default CreditCard;