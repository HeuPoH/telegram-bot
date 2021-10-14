import { Keyboard } from "./core/settings/types";

/**
 * Get keyboard button as object
 * 
 * @param text 
 * @param object 
 * @returns 
 */
export function getKeyboard(text: string, object: any): Keyboard {
    return { text, callback_data: JSON.stringify(object) };
}