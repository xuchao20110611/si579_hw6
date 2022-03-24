import {useEffect,useState} from "react";


const SynonymsButton = (props) => {
    const Synonymsthis = (e) =>{

        e.preventDefault();
        //console.log(props.InputWord);
        //props.setLoadState((currentState)=>{return 1});

        props.setTargetWord((currentWord) =>{
            return props.InputWord;
        });

        props.setDescriptionState((currentStates) =>{
            return 2;
        });

        props.setUrl((currentUrl) => {
            return 'https://api.datamuse.com/words?ml='+props.InputWord;
        });








    };

    return   <button onClick={Synonymsthis} id="show_synonyms" type="button" className="btn btn-secondary">Show synonyms</button>


}
export default SynonymsButton;