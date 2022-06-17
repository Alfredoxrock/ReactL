import React from 'react';

//JSX example


//Using JSX
const Hello = () => {
    return(
    <div>
        <div className = 'dummyClass'>
        <h2>JSX Example</h2>
        </div>
    </div>
    )
}

//Using Method

const Hi = () => {
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
          React.createElement('h1', null, 'Using Method h1'));
}

export default Hi;