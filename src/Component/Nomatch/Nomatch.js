import React from 'react';

const Nomatch = () => {
    const nomatchStyle = {
            color: "tomato",
            textAlign: "center",
            fontSize: "40px"
    }
    return (
        <div style={nomatchStyle}>
            <h1>Page not Found</h1>
            <p>404 Error....</p>
        </div>
    );
};

export default Nomatch;