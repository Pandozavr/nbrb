import {ICurrency, IRate} from './types';


export const getCurrencies = async (id?: number): Promise<ICurrency[]> => {
    const url = id ? `https://api.nbrb.by/exrates/currencies/${id}` : 'https://api.nbrb.by/exrates/currencies'
    const res = await fetch(url)
    return await res.json();
};

export const getExchangeRateByDate = async (currencyAbbr: string, onDate?: string): Promise<IRate> => {
    const url = onDate
        ? `https://api.nbrb.by/exrates/rates/${currencyAbbr}?parammode=2&ondate=${onDate}`
        : `https://api.nbrb.by/exrates/rates/${currencyAbbr}?parammode=2`;
    const res = await fetch(url)
    return await res.json();
};

export const getExchangeRateByDateRange = async (currencyId: number = 431, startDate: string, endDate: string): Promise<IRate[]> => {
    const res = await
        fetch(`https://api.nbrb.by/exrates/rates/dynamics/${currencyId}?startdate=${startDate}&enddate=${endDate}`)
    return await res.json();
};
