import {useState} from "react";

const WordInstance = (props) =>{

    const savethis = (e) =>{

        e.preventDefault();

        props.setSavedWords((currentwords) =>{
            return [...currentwords,
            props.item_word];
        });
    };

    return (<li>{props.item_word}<button onClick={savethis} type="button" className="btn btn-outline-success">(Save)</button></li>);
}
export default WordInstance;