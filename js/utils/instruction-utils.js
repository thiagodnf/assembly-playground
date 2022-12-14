class InstructionUtils {

    static parse(str) {

        if (!IsUtils.isInstruction(str)) {
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

    static isRegister(str) {
        return str.startsWith("R");
    }

    static isImmediate(str) {
        return /\#\d+\]/.test(str);
    }

    static isMemory(str) {
        return /\[0x[\dabcdef]+\]/.test(str) || /\[\d+\]/.test(str);
    }

    static getValue(cpu, operand) {

        if (IsUtils.isImmediate(operand)) {
            return InstructionUtils.getImmediate(operand);
        } else if (IsUtils.isMemory(operand)) {
            const pos = parseInt(operand.replace("\[", "").replace("\]", ""));
            return cpu.ramMemory.getValue(pos);
        } else if (IsUtils.isRegister(operand)) {
            return cpu.getRegister(operand);
        }

        throw new Error(`The operand '${operand}' is not valid`);
    }

    static getValueAsInt(cpu, operand) {
        return ConvertUtils.toInt(this.getValue(cpu, operand));
    }

    static getImmediate(value) {

        value = value.replace("#", "");

        return ConvertUtils.toBinary(value);
    }

    static hasOnlyLabel(str){
        return /^.*\:$/.test(str);
    }
}
