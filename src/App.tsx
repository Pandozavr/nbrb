import {ThreeDaysExchangeRate} from './components/three-days-exchange-rate';
import {Header} from './components/header';
import './App.css'
import {AvgRateForMonth} from './components/avg-rate-for-month';


function App() {
    return (
        <>
            <Header />
            <div style={{padding: '10px'}}>
                <ThreeDaysExchangeRate />
                <AvgRateForMonth />
            </div>
        </>
    )
}

export default App
