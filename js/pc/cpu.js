class CPU {

    constructor($el, numberOfRegistors) {

        this.$el = $el;
        this.numberOfRegistors = numberOfRegistors;
        this.romMemory = {};
        this.ramMemory = {};
        this.registers = {};
    }

    reset() {

        this.registers = {};

        this.setPC(0);
        this.setSR(0, 0)

        for (let i = 2; i < this.numberOfRegistors; i++) {
            this.setRegister("R" + i, ConvertUtils.toBinary(0));
        }

        this.romMemory.reset();
        this.ramMemory.reset();

        this.update();
    }

    loadCode(codeAsStr) {

        this.reset();

        let lines = codeAsStr.split("\n")
            .map(e => e.trim())
            .map(e => e.replace(/\;(.*)/g, ''))
            .filter(el => el.length !== 0);

        let address = 0;

        for (const line of lines) {
            this.romMemory.setValue(address, line);
            address += this.getInstructionStep();
        }
    }

    getInstructionStep() {

        const step = Settings.getWordSize() / Settings.getInstructionLength();

        return step < 1 ? Settings.getInstructionLength() / Settings.getWordSize() : 1;
    }

    setRegister(registorId, value = 0) {

        if (!registorId.startsWith("R")) {
            throw new Error(`${registorId} is invalid. All register starts with 'R'`);
        }

        this.registers[registorId.toUpperCase()] = ConvertUtils.toBinary(value);
    }

    getRegister(registorId) {
        return this.registers[registorId];
    }

    getLastRegister() {
        return this.registers["R4"];
    }

    setSR(n, z) {
        this.registers["SR"] = { n, z };
    }

    getSR() {
        return this.registers["SR"];
    }

    setPC(value) {
        this.registers["PC"] = value;
    }

    getPC() {
        return this.registers["PC"];
    }

    step() {

        let pc = this.getPC();
        let nextPC = pc + 1;

        let value = this.romMemory.getValue(pc);

        let instruction = InstructionUtils.parse(value);

        if (IsUtils.isInstruction(instruction[0])) {

            if (instruction[0] === "MOV") {
                nextPC = MOV.execute(this, instruction[1], instruction[2]);
            } else if (instruction[0] === "ADD") {
                nextPC = ADD.execute(this, instruction[1], instruction[2]);
            } else if (instruction[0] === "SUB") {
                nextPC = SUB.execute(this, instruction[1], instruction[2]);
            } else if (instruction[0] === "CMP") {
                nextPC = CMP.execute(this, instruction[1], instruction[2]);
            } else if (instruction[0] === "JN") {
                nextPC = JN.execute(this, instruction[1]);
            } else if (instruction[0] === "JZ") {
                nextPC = JZ.execute(this, instruction[1]);
            } else if (instruction[0] === "JMP") {
                nextPC = JMP.execute(this, instruction[1]);
            } else if (instruction[0] === "INT") {
                nextPC = INT.execute(this, instruction[1]);
            } else {
                throw new Error(`Command ${instruction[0]} not found`);
            }
        }

        this.setPC(nextPC);

        if (this.getPC() > (this.romMemory.getMemorySize() - 1)) {
            this.setPC(0);
        }

        this.update();
    }

    update() {

        TableUtils.removeAllRows(this.$el);

        for (const key in this.registers) {
            TableUtils.appendRowCpu(this.$el, key, this.registers[key]);
        }
    }

    updateAll() {
        this.update();
        this.romMemory.update();
        this.ramMemory.update();
    }
}
