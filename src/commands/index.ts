import { alert } from './alert';
import { alerts } from './alerts';
import { clients } from './clients';
import { clear } from './clear';
import { info } from './info';
import { save } from './save';
import { start } from './start';

export const command = {
    start: start,
    clients: clients,
    info: info,
    save: save,
    alert: alert,
    alerts: alerts,
    clear: clear
};