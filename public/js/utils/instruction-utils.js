class InstructionUtils {

    static COMMANDS = ["ADD", "SUB", "MOV", "CMP", "JN", "JZ", "JMP"];

    static parse(str) {

        if (!this.isInstruction(str)) {
            return [parseInt(str)];
        }

        let instruction = str.split(" ").map(e => e.trim()).filter(e => e.length !== 0);

        if (instruction.length > 3) {
            throw new Error(`The command ${str} is invalid`);
        }

        if (instruction[1]) {
            instruction[1] = instruction[1].replaceAll(",", "");
        }
        if (instruction[2]) {
            instruction[2] = instruction[2].replaceAll(",", "");
        }

        return instruction;
    }

    static isInstruction(value) {

        for (const command of this.COMMANDS) {

            if (value.toString().startsWith(command)) {
                return true;
            }
        }

        return false;
    }

    static isRegister(str) {
        return str.startsWith("R");
    }

    static isImmediate(str) {
        return str.startsWith("#");
    }

    static isMemory(str) {
        return str.startsWith("[") && str.endsWith("]");
    }

    static getValue(cpu, operand){

        if (InstructionUtils.isImmediate(operand)) {
            return parseInt(src.replace("#", ""));
        } else if (InstructionUtils.isMemory(operand)) {
            const pos = parseInt(src.replace("\[", "").replace("\]", ""));
            return cpu.ramMemory.getValue(pos);
        } else if (InstructionUtils.isRegister(operand)) {
            return cpu.getRegistor(src);
        }

        throw new Error("The value is wrong");
    }
}
