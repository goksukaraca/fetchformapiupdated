import React from 'react';

const FormItem = ({id, title}) => {
    console.log(id);
    console.log(title);
    return(
        <li key={id}>
                <a target="_blank" href={`https://form.jotform.com/${id}`}>{title}</a> 
        </li>
    );
}

export default FormItem;