import botgram from 'botgram';

import { store } from '../core/Store';

/**
 * Return clients which work with bot as string
 * 
 * @param msg
 * @param reply 
 */
export function clients(msg: any, reply: botgram.ReplyQueue): void {
    let clientsAsString = `Всього: ${store.clients.size()}\n`;

    clientsAsString += store.clients.getItems().map((client, index) => `${index}. Клієнт - ${client.name}`).join('\n');
    reply.text(clientsAsString);
}