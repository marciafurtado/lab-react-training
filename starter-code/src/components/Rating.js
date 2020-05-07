import React from 'react';

const Rating = (props) => {
    // console.log(props);
    const starRate = [ '☆☆☆☆☆', '★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★']
    
    const rate = Math.round(props.children);
    // console.log(starRate[rate])
    return (
        <div>
            <p>{starRate[rate]}</p>
        </div>
    )
}

export default Rating;