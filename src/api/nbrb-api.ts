import ky from 'ky';
import {ICurrency} from './types';

export const commonApi = ky.create({});

export const getCurrencies = async () => await commonApi.get<ICurrency[]>('https://api.nbrb.by/exrates/currencies').json()
