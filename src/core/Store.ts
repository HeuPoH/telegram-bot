import { Alert, Client, Note } from './settings/types';

interface StoreProps {
    store: any[],
    add(item: Note | Client | Alert | unknown): void,
    size(): number,
    getItems(): any[],
    getItem(id: number): any,
    delete(id: number): void,
    getItemByIndex(id: number): any
}

class Store implements StoreProps{
    store: any[] = [];

    add(item: Note | Client | Alert): void {
        if(!this.store.find(storageItem => storageItem.id === item.id)) {
            this.store.push(item);
        }
    }

    getItemByIndex(id: number): any {
        return this.store[id] || false;
    }

    size(): number {
        return this.store.length;
    }

    getItems(): any[] {
        return this.store;
    }

    getItem(id: number) {
        return this.store.find(item => item.id === id);
    }

    delete(id: number): void {
        this.store = this.store.filter(item => item.id !== id);
    }
}

export const store = {
    clients: new Store(),
    notes: new Store(),
    alerts: new Store(),
    admins: [ 1847678854, 2029730104 ]
};