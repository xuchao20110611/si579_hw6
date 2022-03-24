import './RhymList.css';
import WordInstance from './WordInstance';
import {useEffect,useState} from "react";

function groupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if(typeof property !== 'function') {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for(const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if(!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for(const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}

const RhymList = (props) =>{


    if(props.LoadState === 1)
    {
        return <output id="word_output" className="col">...loading</output>;

    }

    if(props.DescriptionState===0)
    {
        return <output id="word_output" className="col"></output>;
    }





    //console.log(Words);
    if(props.Words.length===0)
    {

        return <output id="word_output" className="col">(no result)</output>;
    }


    const eventsToShow = [];



    if(props.DescriptionState === 2)
    {

        props.Words.forEach((word,index)=>{
        //console.log(word.word);

        eventsToShow.push(<WordInstance
        key={index}
        setSavedWords={props.setSavedWords}
        item_word={word.word}/>);
    });

    return <output id="word_output" className="col"><ul>{eventsToShow}</ul></output>;
    }


    const data=groupBy(props.Words,'numSyllables');


    for (var syllable in data)
    {
        eventsToShow.push(<h3>Syllables: {syllable}</h3>);
        const rhymetoshow=[];


        data[syllable].forEach((word,index)=>{
            rhymetoshow.push(<WordInstance
            key={index}
            setSavedWords={props.setSavedWords}
            item_word={word.word}/>);
        });
        eventsToShow.push(<ul>{rhymetoshow}</ul>);





    }
    return <output id="word_output" className="col">{eventsToShow}</output>;



}

export default RhymList;


