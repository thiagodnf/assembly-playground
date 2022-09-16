class Hex {

    constructor(int) {
        this.number = "0x" + int.toString(16).toUpperCase()
    }

    toInt() {
        return parseInt(this.number);
    }

    sum(value) {
        return new Hex(this.toInt() + value);
    }

    next() {
        return this.sum(1);
    }

    toString() {
        return this.number;
    }
}

