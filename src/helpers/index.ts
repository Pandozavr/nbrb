const getFormatDate = (date: Date) => {
    date.setHours(date.getHours() + 3);
    return date.toISOString().slice(0, 10);
};
export const getTodayDate = () => getFormatDate(new Date());

const getAfterBeforeTodayDate = (day: 'yesterday' | 'tomorrow') => {
    const today = new Date();
    return day === 'yesterday'
        ? getFormatDate(new Date(today.setDate(today.getDate() - 1)))
        : getFormatDate(new Date(today.setDate(today.getDate() + 1)));
}

export const getYesterdayDate = () => getAfterBeforeTodayDate('yesterday')
export const getTomorrowDate = () => getAfterBeforeTodayDate('tomorrow')

export const getFirstDayOfMonth = () => {
    const today = new Date();
    return getFormatDate(new Date(today.setDate(today.getDate() - today.getDate() + 1)))
};
