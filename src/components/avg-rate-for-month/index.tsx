import {getFirstDayOfMonth, getTodayDate} from '../../helpers';
import {useEffect, useState} from 'react';
import {IRate} from '../../api/types';
import {getExchangeRateByDateRange} from '../../api/nbrb-api';

export const AvgRateForMonth = () => {
    const [rates, setRates] = useState<IRate[] | null>(null);
    const [sumValue, setSumValue] = useState(0);

    useEffect(() => {
        getExchangeRateByDateRange(431, getFirstDayOfMonth(), getTodayDate()).then(res => setRates(res))
    }, [])

    useEffect(() => {
        if (rates) {
            rates.forEach((item) => setSumValue(prevState => prevState + item.Cur_OfficialRate))
        }
    }, [rates])

    return (
        <div>AVG Rate For The Month At {getTodayDate()} - {rates ? (sumValue / rates.length).toFixed(4) : 0}</div>
    )
}
