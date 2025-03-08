import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ICurrency} from './api/types';

function App() {
    const [currencies, setCurrencies] = useState<ICurrency[] | null>(null);

    const handleClick = async () => {
        const res = await fetch('https://api.nbrb.by/exrates/currencies')
        // const res = await getCurrencies();
        const data = await res.json();
        setCurrencies(data);
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            {currencies && <div>{currencies.find(item => item.Cur_Abbreviation === 'EUR')!.Cur_Abbreviation}</div>}
            <div className="card">
                <button onClick={handleClick}>
                    get request
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
