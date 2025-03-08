import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ICurrency} from './api/types';
import {getCurrencies} from './api/nbrb-api';

function App() {
    const [count, setCount] = useState(0)
    const [currencies, setCurrencies] = useState<ICurrency[] | null>(null);

    useEffect(() => {
        getCurrencies().then(res => setCurrencies(res))
    }, [])

    currencies && console.log(currencies.find(item => item.Cur_Abbreviation === 'EUR'))

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
            <div>{currencies && currencies.find(item => item.Cur_Abbreviation === 'EUR')?.Cur_Abbreviation}</div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
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
