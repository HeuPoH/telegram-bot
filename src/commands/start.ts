import botgram from 'botgram';

import { getKeyboard } from '../functions';
import { store } from '../core/Store';

/**
 * Start to work with bot
 * 
 * @param msg 
 * @param reply 
 */
export function start(msg: any, reply: botgram.ReplyQueue): void {
    store.clients.add({
        id: msg.user.id,
        name: msg.chat.name,
        chatId: msg.chat.id
    });

    reply.inlineKeyboard([[ getKeyboard('Звіт за рейс 🚆', { type: 'set', reportId: 0 }) ]]);
    reply.html('<b>Виберіть тип звіту</b>😈🔪🔥');
}