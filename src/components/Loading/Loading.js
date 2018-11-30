import React from 'react';
export default function Loading(props){
    console.log(props);
    if(props.isLoading){
        return <div>loading......</div>
    }
    return <div>loading......</div>
}