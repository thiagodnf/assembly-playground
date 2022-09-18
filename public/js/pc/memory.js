class RamMemory {

    constructor($el, memorySize) {

        this.$el = $el;
        this.memorySize = memorySize;
        this.memory = {};
        this.isBinary = true;

        this.reset();
    }

    reset() {

        for (let i = 0; i < this.memorySize; i++) {
            this.memory[i] = "0";
        }

        this.update();
    }

    convert(value) {

        if (this.isBinary) {
            return ConvertUtils.toBinary(value);
        }

        return value;
    }

    validateAddress(address) {
        if (!ConvertUtils.isHex(address)) {
            throw new Error(`Address ${address} is not hexadecimal`);
        }
    }

    getValue(address) {

        return this.memory[address];
    }

    setValue(address, value) {

        this.memory[address] = value.toString();

        if (InstructionUtils.isInstruction(value)) {
            this.memory[address + 1] = "0";
        }

        this.update();
    }

    update() {

        TableUtils.removeAllRows(this.$el);

        let address = 0;

        while (address <= this.memorySize - 1) {

            let step = 1;

            let value = this.memory[address];

            if (InstructionUtils.isInstruction(value)) {
                step = Settings.getInstructionLength();
            } else {
                if (Settings.getMemoryValueAs() === "decimal") {
                    value = value;
                } else if (Settings.getMemoryValueAs() === "binary") {
                    value = ConvertUtils.toBinary(value);
                } else if (Settings.getMemoryValueAs() === "hex") {
                    value = ConvertUtils.toHex(value);
                }
            }

            TableUtils.appendMemoryRow(this.$el, address, value, step);

            address = address + step;
        }
    }
}
