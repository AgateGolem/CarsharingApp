import { createContext } from "react";

export const DataContext = createContext({
    city: '',
    point: '',
    model: '',
    color: '',
    dateFrom: '',
    dateTo: '',
    tariff: '',
    fuel: '',
    seat: '',
    handDrive: ''
})