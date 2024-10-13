
class Schema {
    constructor(definition) {
        this.definition = definition;
    }
    validate(data) {
        const errors = [];
        for (const key in this.definition) {
            if (this.definition.hasOwnProperty(key)) {
                const type = this.definition[key];
                if (!this._internalValidateType(type, data[key])) errors.push(`Expected type "${this.definition[key]}" for "${key}", got "${type}"`);
            }
        }
        return errors.length ? errors : null;
    }

    _internalValidateType(type, value) {
        switch (type) {
            case 'string':
                return typeof value === 'string';
            case 'number':
                return typeof value === 'number';
            case 'boolean':
                return typeof value === 'boolean';
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case 'date':
                return !isNaN(Date.parse(value));
            default:
                return false;
        }
    }
}

module.exports = Schema;