import React from 'react';

const FormContainer = ({getApiKey}) => {
    return(
        <div className="container">
            <button onClick={getApiKey} className="button-api">Click to see your jotform forms</button>
        </div>
    );
}


export default FormContainer;