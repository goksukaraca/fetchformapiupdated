import React, { useState } from 'react';
import FormContainer from './FormContainer';
import FormItem from './FormItem';
//import FormItem from './FormItem';

const apiKey = `3d3e67d7703a9d49cccfc8e5686daa94`;

const Forms = () => {

    const [data, setData] = useState([]);

    const getApiKey = e => {
        e.preventDefault();
        fetch(`https://api.jotform.com/user/forms?apikey=${apiKey}&orderby=id`)
        .then(response => response.json()).then(veri => {
            setData(veri.content);
            console.log(veri.content)
        });
    }
    console.log(data);


    return(
        <form className="form-api">
            <FormContainer getApiKey={getApiKey}/>
            <ul> 
                {data.map(item => {
                    console.log("map func:"+item);
                    return(<FormItem 
                        {...item} id={item.id} title={item.title}
                    />);
                    
            })}
            </ul>
        </form>
    );
}

export default Forms ;