

import {useEffect,useState} from "react";

const RhymeButton = (props) => {
    const Rhymethis = (e) =>{

        e.preventDefault();
        //console.log(props.InputWord);
        //props.setLoadState((currentState)=>{return 1});

        props.setTargetWord((currentWord) =>{
            return props.InputWord;
        });

        props.setDescriptionState((currentStates) =>{
            return 1;
        });

        props.setUrl((currentUrl) => {
            return 'https://api.datamuse.com/words?rel_rhy='+props.InputWord;
        });







    };




    return  <button  onClick={Rhymethis} id="show_rhymes" type="button" className="btn btn-primary">Show rhyming words</button>;

}
export default RhymeButton;