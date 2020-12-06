import React from 'react';
import md5 from 'md5';
function Gravatar(props){
    const email= props.email;
    const hash= md5(email);
    return (<img className={props.className} src={`http://gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar"/>);

}
//richardbkaufman@gmail.com
export default Gravatar;