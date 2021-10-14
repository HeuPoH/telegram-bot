import botgram from 'botgram';

import { store } from '../core/Store';

/**
 * Add new alert to alerts
 * 
 * @param msg 
 * @param reply 
 * @returns 
 */
export function alert(msg: any, reply: botgram.ReplyQueue) {
    if(!store.admins.includes(msg.user.id)) {
        return;
    }

    const [ id, delayMin, text ] = (msg.args() || '|').split('|');
    const client = store.clients.getItemByIndex(+id);
    const delayMs = +delayMin * 60 * 1000;

    if(!client || isNaN(delayMs)) {
        reply.text('Не вірно введено аргумент або користувача не знайдено');
        return;
    }

    reply.text(`Повідомлення буде відправлено - ${client.name} через ${delayMin} хвилин`);
    store.alerts.add({ id: client.id, name: client.name, delayMin, text });
    setTimeout(() => {
        reply.to(client.chatId).text(text);
        reply.text(`Повідомлення надіслано - ${client.name}`);
        store.alerts.delete(client.id);
    }, delayMs);
}