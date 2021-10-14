import botgram from 'botgram';

import { GoogleTable } from '../core/GoogleTable';
import { store } from '../core/Store';

/**
 * Save the note and send to google docs
 * 
 * @param msg 
 * @param reply 
 * @returns 
 */
export function save(msg: any, reply: botgram.ReplyQueue): void {
    try {
        const note = store.notes.getItem(msg.user.id);
    
        if(note && Object.values(note.data).findIndex(str => str === null) === -1) {
            reply.html(`Запис успішно збережено 😺`);
            GoogleTable.send(note);
            store.notes.delete(msg.user.id);
            return;
        }

        reply.text('Не всі поля заповнено 😿');
    } catch(error) {
        reply.text('Запись не сохранена');
        reply.text(error.message);
    }
}