

const SavedList = (props) =>{
    if (props.SavedWords.length)
    {
        return (<div className="col">Saved words: <span id="saved_words">{props.SavedWords.join(',')}</span></div>);
    }
    else
    {
        return (<div className="col">Saved words: <span id="saved_words">(none)</span></div>);
    }
}

export default SavedList;