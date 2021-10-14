import botgram from 'botgram';

import { dict } from '../core/settings/reportTemplates';
import { store } from '../core/Store';

/**
 * Show condition fields of note
 * 
 * @param msg 
 * @param reply 
 * @returns 
 */
export function info(msg: any, reply: botgram.ReplyQueue): void {
    const result = store.notes.getItem(msg.user.id);

    if(!result) {
        reply.text('Ви не почали заповнювати жоден звіт 🙀');
        return;
    }

    const resultAsString = Object.keys(result.data).map(key => {
        return `${dict[key]}: ${result.data[key] ? `${result.data[key]} ✅` : '❌'}`;
    }).join(' \n');
    reply.html(resultAsString);
}