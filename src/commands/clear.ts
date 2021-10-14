import { store } from '../core/Store';

/**
 * Delete note.
 * 
 * @param msg 
 */
export function clear(msg: any): void {
    store.notes.delete(msg.user.id);
}