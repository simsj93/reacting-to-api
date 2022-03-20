import React from 'react';
import { useEffect, useState } from 'react';
import Filmlist from './Filmlist';
import Peoplelist from './Peoplelist';
import './styles.css'

const App = () => {
    const [films, setFilms] = useState([]); 
    const [people, setPeople] = useState([]); 
    const [content1, setContent1] = useState([]); 
    const [content2, setContent2] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            return res.json(); 
        })
        .then(res => {
            setFilms(res); 
        })
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => { 
            return res.json()
        })
        .then(res => {
            setPeople(res);
        })
    }, [])

    function handleButtonClick1 (e) {
        setContent2('')
        setContent1(<Filmlist films={films}/>)
    }

    function handleButtonClick2 (e) {
        setContent1('')
        setContent2(<Peoplelist people={people}/>)
    }

    return (
        <main className="container">
            <div className="row justify-content-center">
                <button onClick={handleButtonClick1}>Get Films</button>
                <button onClick={handleButtonClick2}>Get People</button>
             </div>
             {content1}
             {content2}
        </main>
    )
}


export default App; 