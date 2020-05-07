import React from 'react';

const Random = (props) => {
    // console.log(props)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <div>
            {getRandomInt(props.min, props.max)}
        </div>
    )
}


export default Random;