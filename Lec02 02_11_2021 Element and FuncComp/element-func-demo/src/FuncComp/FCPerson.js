import React from "react";

export default function FCPerson(props) {

    let num = 7;


    return (
        <div style={{
            color: 'red',
            border: 'solid green 2px',
            margin: 20,
            padding: 10,
            fontSize: 30,
            borderRadius: 25,
        }} >
            <div>ID:{props.id}</div>
            <div>Name:{props.name}</div>
            <div>num:{num * props.id}</div>
        </div>
    );
}