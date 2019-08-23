import React from 'react';

function UserGreeting(props) {
    return <h1>Welcome Back !</h1>;
}

function GuestGreeting(props) {
    return <h1>Sign up now !</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>;
    }else{
        return <GuestGreeting/>;
    }
}

export default Greeting;
