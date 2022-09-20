class CPU {

    constructor($el, numberOfRegistors) {

        this.$el = $el;
        this.numberOfRegistors = numberOfRegistors;
        this.romMemory = {};
        this.ramMemory = {};
        this.registors = {};
    }

    reset() {

        this.registors = {};

        this.setPC(0);
        this.setSR(0, 0)

        for (let i = 0; i < this.numberOfRegistors; i++) {
            this.setRegistor("R" + i, ConvertUtils.toBinary(0));
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

        for(const line of lines){
            this.romMemory.setValue(address, line);
            address += this.getInstructionStep();
        }
    }

    getInstructionStep() {

        const step = Settings.getWordSize() / Settings.getInstructionLength();

        return step < 1 ? Settings.getInstructionLength() / Settings.getWordSize() : 1;
    }

    setRegistor(registorId, value = 0) {
        this.registors[registorId.toUpperCase()] = value;
    }

    getRegistor(registorId) {
        return this.registors[registorId];
    }

    setSR(n, z) {
        this.setRegistor("SR", {n, z});
    }

    getSR() {
        return this.getRegistor("SR");
    }

    setPC(value) {
        this.setRegistor("PC", value);
    }

    getPC() {
        return this.getRegistor("PC");
    }

    step() {

        let pc = this.getPC();
        let nextPC = pc + 1;

        let value = this.romMemory.getValue(pc);

        let instruction = InstructionUtils.parse(value);

        if (InstructionUtils.isInstruction(instruction[0])) {

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

        for (const key in this.registors) {
            TableUtils.appendRowCpu(this.$el, key, this.registors[key]);
        }
    }

    updateAll(){
        this.update();
        this.romMemory.update();
        this.ramMemory.update();
    }
}
