class CPU {

    constructor($el, numberOfRegistors) {

        this.$el = $el;
        this.numberOfRegistors = numberOfRegistors;
        this.romMemory = {};
        this.ramMemory = {};
        this.registers = {};

        this.compiler = new MSP430Assembler.default.Assembler();
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

    moveLabelsToTheFirstInstruction(lines) {

        let output = [];

        let counter = 0;

        while (counter < lines.length) {

            let line = lines[counter];
            let step = 1;

            if (InstructionUtils.hasOnlyLabel(line)) {

                if (line + 1 < lines.length) {
                    output.push(`${line} ${lines[counter + 1]}`);
                    step = 2;
                }
            } else {
                output.push(`${line}`);
            }

            counter += step;
        }

        return output;
    }

    async loadCode(codeAsStr) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                this.reset();

                let output = this.compiler.compile(codeAsStr);

                if (output.errors.length > 0) {
                    reject(output.errors.join("\n"))
                    return;
                }

                let address = 0;

                for (let instruction of output.instructions) {

                    this.romMemory.setValue(address, instruction.toString());
                    address += this.getInstructionStep();
                }

                resolve();

            }, 0);
        });
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
        return this.registers["R" + (this.numberOfRegistors - 1)];
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

        if(IsUtils.isBin(value)){
            return;
        }

        let instruction;

        try {
            instruction = MSP430Assembler.default.InstructionUtils.getInstruction([0, value]);
        } catch (error) {
            OutputUtils.error(error);
            return;
        }

        let mnemonic = instruction[1].mnemonic;
        let operands = instruction[1].operands;

        if (mnemonic === "MOV") {
            nextPC = MOV.execute(this, operands[0], operands[1]);
        } else if (mnemonic === "ADD") {
            nextPC = ADD.execute(this, operands[0], operands[1]);
        } else if (mnemonic === "SUB") {
            nextPC = SUB.execute(this, operands[0], operands[1]);
        } else if (mnemonic === "CMP") {
            nextPC = CMP.execute(this, operands[0], operands[1]);
        } else if (mnemonic === "JN") {
            nextPC = JN.execute(this, operands[0]);
        } else if (mnemonic === "JZ") {
            nextPC = JZ.execute(this, operands[0]);
        } else if (mnemonic === "JMP") {
            nextPC = JMP.execute(this, operands[0]);
        } else if (mnemonic === "INT") {
            nextPC = INT.execute(this, operands[0]);
        } else {
            throw new Error(`Command ${operands[0]} not found`);
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
