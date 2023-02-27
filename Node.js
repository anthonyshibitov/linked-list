export default class {
    data;
    next;

    constructor(value) {
        this.next = null;
        this.data = value;
    }

    value() {
        return this.data;
    }
}
