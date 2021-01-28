/**
 * 通用字典类
 */
export default class Dictionary<T1, T2> {
    private items = {}

    set(key, value) {
        this.items[key] = value;
        return true;
    }

    has(key) {
        return this.items.hasOwnProperty(key)
    }

    remove(key) {
        if (!this.has(key)) return false;
        delete this.items[key]
        return true
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    keys() {
        return Object.keys(this.items)
    }

    // values() {
    // }

    get length() {
        return this.keys().length
    }

    clear() {
        this.items = {}
    }
}