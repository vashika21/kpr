import React from "react";

const HelloWorldPage = ({ username }) => {
  return ( 
    <center> 
        <form>
        <div>
      <h1>Hello, {username}!</h1>
      <p>Welcome to our website.</p>
    </div>
        </form>
    </center>
    
  );
};

export default HelloWorldPage;