import React from 'react';


const BoxColor = (props) => {
    // console.log(props);
    let myColor = `rgb(${props.r},${props.g},${props.b})`;
    return (
        <div  style={{backgroundColor: myColor}}>
            {myColor}
        </div>
    )
}


export default BoxColor;