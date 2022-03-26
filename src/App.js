import logo from './logo.svg';
import './App.css';
import RhymList from './components/RhymList';
import SavedList from './components/SavedList';
import OutputDescription from './components/OutputDescription';
import RhymeButton from './components/RhymeButton';
import SynonymsButton from './components/SynonymsButton';
import {useEffect,useState} from "react";

function App() {

    const [TargetWord,setTargetWord]=useState('');
    const [InputWord,setInputWord]=useState('');
    const [Url,setUrl]=useState('');
    const [LoadState,setLoadState]=useState(0);

    const [Words, setWords] = useState([]);
    const [SavedWords,setSavedWords] = useState([]);
    const [DescriptionState,setDescriptionState]=useState(0);

    useEffect(() => {

        fetch(Url)
            .then((response) => response.json())
            .then((json) => setWords(Object.values(json)));


    }, [Url]);

    useEffect(()=>{
        setLoadState((currentState)=>{return 1});
    },[Url])

    useEffect(()=>{
        setLoadState((currentState)=>{return 0});
    },[Words])




  return (
    <main className="container">
    <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
    <p>Source code: https://github.com/xuchao20110611/si579_hw6/tree/master </p>
    <div className="row">
        <SavedList SavedWords={SavedWords}/>
    </div>
    <div className="row">
        <div className="input-group col">
            <input className="form-control" type="text" placeholder="Enter a word" id="word_input"
            onKeyDown = {e=> {if (e.keyCode === 13){
            e.preventDefault();
            setTargetWord((currentWord) =>{
            return InputWord;
        });


        setDescriptionState((currentStates) =>{
            return 1;
        });

        setUrl((currentUrl) => {
            return 'https://api.datamuse.com/words?rel_rhy='+InputWord;
        });

        }}}
            onChange={(e)=>setInputWord(e.target.value)}/>

            <RhymeButton
            setDescriptionState={setDescriptionState}
            setTargetWord={setTargetWord}
            setUrl={setUrl}
            setWords={setWords}
            setLoadState={setLoadState}
            InputWord={InputWord} />

            <SynonymsButton
            setDescriptionState={setDescriptionState}
            setTargetWord={setTargetWord}
            setUrl={setUrl}
            setWords={setWords}
            setLoadState={setLoadState}
            InputWord={InputWord}/>
        </div>
    </div>
    <div className="row">
        <OutputDescription DescriptionState={DescriptionState} TargetWord={TargetWord}/>
    </div>
    <RhymList Words={Words}
    setSavedWords={setSavedWords}
    LoadState={LoadState}
    setLoadState={setLoadState}
    DescriptionState={DescriptionState}/>
</main>
  );
}

export default App;
