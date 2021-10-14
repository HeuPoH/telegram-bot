import { ReportOne } from './types';

/**
 * If you need more templates, add object to array, properties to dict and update keyboard in start.ts
 */
export const reportTemplates: [ ReportOne ] = [ 
    {
        date: null,
        incomingResidue: null,
        amountCome: null,
        amountOfExpenses: null,
        outgoingResidue: null
    }
];

export const dict: { [ key: string ]: string } = {
    date: 'Дата',
    incomingResidue: 'Вхідний залишок',
    amountCome: 'Сума надходження',
    amountOfExpenses: 'Сума витрат',
    outgoingResidue: 'Вихідний залишок'
};