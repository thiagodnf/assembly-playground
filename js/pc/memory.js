class RamMemory {

    constructor($el, cpu, memorySize) {

        this.$el = $el;
        this.cpu = cpu;
        this.memorySize = memorySize;
        this.memory = {};

        this.reset();
    }

    reset() {

        this.memory = {};

        for (let i = 0; i < this.getMemorySize(); i++) {
            this.memory[i] = ConvertUtils.toBinary(0);
        }

        this.update();
    }

    getValue(address) {

        address = ConvertUtils.toInt(address);

        return this.memory[address];
    }

    setValue(address, value) {

        console.debug("setValue", { address, value });

        address = ConvertUtils.toInt(address);

        this.memory[address] = ConvertUtils.toBinary(value);

        if (IsUtils.isInstruction(value)) {

            this.memory[address] = value;

            for (let i = 1; i < this.cpu.getInstructionStep(); i++) {
                this.memory[address + i] = ConvertUtils.toBinary(0);
            }
        } else {
            this.memory[address] = ConvertUtils.toBinary(value);
        }

        this.update();
    }

    getMemorySize() {
        return Math.pow(2, this.memorySize);
    }

    update() {

        TableUtils.removeAllRows(this.$el);

        let address = 0;

        while (address <= this.getMemorySize() - 1) {

            let step = 1;

            let value = this.memory[address];

            if (IsUtils.isInstruction(value)) {
                step = this.cpu.getInstructionStep();
            } else {
                value = ConvertUtils.toUI(value, Settings.getShowMemoryDataAs());
            }

            TableUtils.appendMemoryRow(this.$el, address, value, step);

            address = address + step;
        }
    }
}
