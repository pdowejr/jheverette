import React from "react";

function PractOfConditionalRendering(props) {
  const isloggedIn = props.isloggedIn;
  
    return (
    <h1>{isloggedIn ? "Welcome Back!" : "Please sign in."}</h1>
    )
  
}

export default PractOfConditionalRendering;

export const Notifications = ({hasNotifications}) => {
    return (
        <div>
            {hasNotifications && <p>You have new notifications!</p>}
        </div>
    );
}

export const StatusMessage = (props) => {
    const status = props.status;
    switch (status) {
        case "loading":
            return <p>Loading...</p>;
        case "success":
            return <p>Data loaded successfully!</p>;
        case "error":
            return <p>Error loading data.</p>;
        default:
            return null;
    }
}