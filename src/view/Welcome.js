import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    );
}

const element = <Welcome name='Sara'/>

ReactDOM.render(
    element, document.getElementById('root')
)


export default Welcome;
