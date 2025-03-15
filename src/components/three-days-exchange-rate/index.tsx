import {useEffect, useState} from 'react';
import {IRate} from '../../api/types';
import {getExchangeRateByDate} from '../../api/nbrb-api';
import {CurrencyAbbrISO} from '../../constants/currency';
import {getTodayDate, getTomorrowDate, getYesterdayDate} from '../../helpers';
import styles from './styles.module.css';

export const ThreeDaysExchangeRate = () => {
    const [todayRate, setTodayRate] = useState<IRate | null>(null);
    const [yesterdayRate, setYesterdayRate] = useState<IRate | null>(null);
    const [tomorrowRate, setTomorrowRate] = useState<IRate | null>(null);

    useEffect(() => {
        getExchangeRateByDate(CurrencyAbbrISO.Usd).then(res => setTodayRate(res))
        getExchangeRateByDate(CurrencyAbbrISO.Usd, getYesterdayDate()).then(res => setYesterdayRate(res))
        getExchangeRateByDate(CurrencyAbbrISO.Usd, getTomorrowDate()).then(res => setTomorrowRate(res))
    }, [])

    const renderSection = (day: string, getDate: () => string, rateValue?: number) => {
        return (
            <div className={styles.section}>
                <div className={styles.day}>{day}</div>
                <div>{getDate()}</div>
                <div className={styles.rate}>{rateValue}</div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <h2>Exchange Rate For Three Days</h2>
            {renderSection('Yesterday', getYesterdayDate, yesterdayRate?.Cur_OfficialRate)}
            {renderSection('Today', getTodayDate, todayRate?.Cur_OfficialRate)}
            {renderSection('Tomorrow', getTodayDate, tomorrowRate?.Cur_OfficialRate)}
        </div>
    )
}
