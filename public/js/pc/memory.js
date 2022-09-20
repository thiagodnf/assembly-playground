class RamMemory {

    constructor($el, memorySize) {

        this.$el = $el;
        this.memorySize = memorySize;
        this.isBinary = true;
        this.instructionLength = 8;

        this.memory = {};

        this.reset();
    }

    reset() {

        let size = Math.pow(2, this.memorySize);

        for (let i = 0; i < size; i++) {
            this.memory[i] = ConvertUtils.toBinary(0);
        }

        this.update();
    }

    getInstructionStep() {

        const step = Settings.getWordSize() / Settings.getInstructionLength();

        return step < 1 ? Settings.getInstructionLength() / Settings.getWordSize() : 1;
    }

    getValue(address) {

        address = ConvertUtils.toInt(address);

        return this.memory[address];
    }

    setValue(address, value) {

        address = ConvertUtils.toInt(address);

        this.memory[address] = ConvertUtils.toBinary(value);

        if (IsUtils.isInstruction(value)) {

            this.memory[address] = value;

            for (let i = 1; i < this.getInstructionStep(); i++) {
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
        let size = Math.pow(2, this.memorySize);

        while (address <= size - 1) {

            let step = 1;

            let value = this.memory[address];

            if (IsUtils.isInstruction(value)) {
                step = this.getInstructionStep();
            } else {
                value = ConvertUtils.toUI(value, Settings.getShowMemoryValueAs());
            }

            TableUtils.appendMemoryRow(this.$el, address, value, step);

            address = address + step;
        }
    }
}
