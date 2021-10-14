import botgram from 'botgram';

import { command } from './commands';
import { settings } from './core/settings/settings';
import { dict, reportTemplates } from './core/settings/reportTemplates';
import { getKeyboard } from './functions';
import { phrases } from './phrases';
import { store } from './core/Store';

const bot = botgram(settings.token);

bot.command('start', command.start);
bot.command('clients', command.clients);
bot.command('info', command.info);
bot.command('save', command.save);
bot.command('clear', command.clear);
bot.command('alert', command.alert);
bot.command('alerts', command.alerts);

bot.command((msg: any , reply: botgram.ReplyQueue) => {
    reply.text('Команда не знайдена');
});

bot.text((msg: any, reply: botgram.ReplyQueue) => {
    const note = store.notes.getItem(msg.user.id);

    if(note?.currentField) {
        note.data[note.currentField] = msg.text;
        const keyboard = Object.keys(reportTemplates[note.reportId]).map(key => {
            const arrow = note.data[key] ? '✅' : '❌';

            return [ getKeyboard(`${dict[key]} ${arrow}`, { type: 'fill', field: key }) ];
        });

        reply.inlineKeyboard(keyboard);
        reply.html(`Поле - <b>${dict[note.currentField]}</b> введено: <b>${msg.text}</b>`);
        note.currentField = null;
        return;
    }

    reply.html(`${phrases[Math.floor(Math.random() * phrases.length)]}`);
});

bot.callback((query: any) => {
    const { type, reportId, field } = JSON.parse(query.data);
    const reply = bot.reply(query.message.chat);

    switch(type) {
        case 'set':
            if(store.notes.getItem(query.message.user.id)) {
                reply.text('Ви вже почали вносити дані. Щоб почати нове введіть /clear, а потім знову /start');
                return;
            }

            store.notes.add({
                id: query.message.user.id,
                name: query.message.user.name,
                currentField: null,
                date: query.message.date,
                reportId: reportId,
                data: { ...reportTemplates[reportId] }
            });
            const keyboard = Object.keys(reportTemplates[reportId])
                 .map(key => [ getKeyboard(dict[key], { type: 'fill', field: key }) ]);
            reply.inlineKeyboard(keyboard);
            reply.html(`<b>Необхідно заповнити наступні рядки</b>`);
        break;

        case 'fill':
            const note = store.notes.getItem(query.message.user.id);

            if(!note) {
                reply.text('Повторіть введення /start');
                return;
            }

            note.currentField = field;
            reply.html(`Введіть <b>${dict[field]}</b>:`)
        break;

        default:
            return;
    }
});