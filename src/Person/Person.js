import React from 'react';

const person = (props)=> { 
return (
<div>
<p onClick={props.click}>I'm {props.name} dude and I like {props.hobby}  and my age is {props.age}</p>
<p>{props.children}</p>
    </div>
)

};

export default person;