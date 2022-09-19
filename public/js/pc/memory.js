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
            this.memory[i] = ConvertUtils.toBinary(0);
        }

        this.update();
    }

    getValue(address) {

        return this.memory[address];
    }

    setValue(address, value) {

        if (IsUtils.isHex(address)) {
            address = ConvertUtils.toInt(address);
        }

        this.memory[address] = ConvertUtils.toBinary(value);

        if (IsUtils.isInstruction(value)) {

            this.memory[address] = value;

            for (let i = 1; i < Settings.getInstructionLength(); i++) {
                this.memory[address + i] = ConvertUtils.toBinary(0);
            }
        } else {
            this.memory[address] = ConvertUtils.toBinary(value);
        }

        this.update();
    }

    update() {

        TableUtils.removeAllRows(this.$el);

        let address = 0;

        while (address <= this.memorySize - 1) {

            let step = 1;

            let value = this.memory[address];

            if (IsUtils.isInstruction(value)) {
                step = Settings.getInstructionLength();
            } else {
                value = ConvertUtils.toUI(value, Settings.getShowMemoryValueAs());
            }

            TableUtils.appendMemoryRow(this.$el, address, value, step);

            address = address + step;
        }
    }
}
