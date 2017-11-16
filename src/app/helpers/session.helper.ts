export class SessionHelper
{
    private _storage: Storage;
    constructor(){
        this._storage = sessionStorage;
    }

    set(key: string, value: any) {
        this._storage.setItem(key, JSON.stringify(value));
    }

    get<T>(key: string): T {
        var item = this._storage.getItem(key);
        if (!item || item == 'undefined' || item == null) return null;
        return <T>JSON.parse(item);
    }

    removeAll() {
        this._storage.clear();
    }

    removeItem(key: string) {
        this._storage.removeItem(key);
    }

}