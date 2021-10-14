import botgram from 'botgram';

import { store } from '../core/Store';

/**
 * Show all alerts which didnt resolve.
 * 
 * @param msg
 * @param reply 
 */
export function alerts(msg: any, reply: botgram.ReplyQueue): void {
    let alertsAsString = `Всього: ${store.alerts.size()}\n`;

    alertsAsString += store.alerts.getItems()
        .map((alert, index) => `${index}. Уведмоление - <b>${alert.name}</b> \n Задержка - </b>${alert.delayMin} минут(-ы)</b>`)
        .join('\n');
    reply.html(alertsAsString);
}