

const OutputDescription = (props) =>{
    if (props.DescriptionState==1)
    {
        return (<h2 className="col" id="output_description">Words that rhyme with {props.TargetWord}</h2>);
    }
    if (props.DescriptionState==0)
    {
        return (<h2 className="col" id="output_description"></h2>);
    }
    return (<h2 className="col" id="output_description">Words with a similar meaning to {props.TargetWord}</h2>);
}

export default OutputDescription;