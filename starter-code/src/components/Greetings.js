import React from 'react';

const Greetings = (props) => {
    // console.log(props.lang);
    let greeting

    switch (props.lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'es':
            greeting = 'Holla';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
    }
    return (
        <div>
            <p>{greeting} {props.children}</p>
        </div>
    )
}




export default Greetings;