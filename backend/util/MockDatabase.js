
class MockItem {
    constructor(data, db) {
        this._db = db;
        this._values = {};
        Object.assign(this._values, data);
    }
    
    update(key, value) {
        if (this[key] == undefined) console.error(`item "${key}" does not exist`);
        this._db._internalDeleteIndexRecord(this, key);
        this._values[key] = value;
        this._db._internalBuildIndexRecord(this);
    }
    
    get(key) {
        return this._values[key];
    }

    raw() {
        return Object.freeze(Object.assign({}, this._values));
    }
}

class MockDatabase {
    constructor(schema) {
        this.data = []
        this.index = {}
        this.schema = schema;
    }

    add(data) {
        if (this.schema !== null) this.schema.validate(data);
        const item = new MockItem(data, this);
        this.data.push(item);
    }

    raw() {
        return Object.freeze([...this.data].map(item => item.raw()));
    }

    find(query) {
        const keys = Object.keys(query);
        if (keys.length === 0) return this.data;
        return this.data.filter(item => keys.every(key => item[key] === query[key]));
    }

    reset() {
        this.index = {};
        this.data.forEach(item => this._internalBuildIndexRecord(item));
    }

    _internalBuildIndexRecord(item) {
        for (const key in item) {
            if (key != 'db') {
                if (!this.index[key]) this.index[key] = {};
                const value = item[key];
                if (!this.index[key][value]) this.index[key][value] = [];
                this.index[key][value].push(item);
            };
        };
    }

    _internalDeleteIndexRecord(item, key) {
        const value = item[key];
        if (this.index[key] && this.index[key][value]) {
            this.index[key][value] = this.index[key][value].filter(i => i != item);
            if (this.index[key][value].length === 0) delete this.index[key][value];
        };
    }
}

module.exports = MockDatabase;