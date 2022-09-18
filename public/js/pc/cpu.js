class CPU {

    constructor($el, romMemory, ramMemory, numberOfRegistors) {

        this.$el = $el;
        this.numberOfRegistors = numberOfRegistors;
        this.romMemory = romMemory;
        this.ramMemory = ramMemory;
        this.registors = {};

        this.reset();
    }

    reset() {

        this.setPC(0);
        this.setSR(0, 0)

        for (let i = 0; i < this.numberOfRegistors; i++) {
            this.setRegistor("R" + i, "0");
        }

        this.romMemory.reset();

        this.update();
    }

    setRegistor(registorId, value = 0) {
        this.registors[registorId.toUpperCase()] = value;
    }

    getRegistor(registorId) {
        return this.registors[registorId];
    }

    getSR() {

        const parts = this.getRegistor("SR").split("|").map(e => e.trim());

        return {
            n: parseInt(parts[0].split(":").map(e => e.trim())[1]),
            z: parseInt(parts[1].split(":").map(e => e.trim())[1])
        }
    }

    setSR(n, z) {
        this.setRegistor("SR", `N:${n} | Z:${z}`);
    }

    setPC(value) {
        this.setRegistor("pc", value);
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

        if (this.getPC() > (this.ramMemory.memorySize - 1)) {
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
