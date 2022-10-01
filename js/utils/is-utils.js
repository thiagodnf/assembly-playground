class IsUtils {

    static COMMANDS = ["ADD", "SUB", "MOV", "CMP", "JN", "JZ", "JMP", "INT"];

    static DEC = "-?[0-9]+";

    static HEX = "0[xX][0-9a-fA-F]+";

    static BIN = "0[bB][01]+";

    static is(regex, str) {
        return new RegExp(`^${regex}$`).test(str)
    }

    static isDec(str) {

        return MSP430Assembler.default.RegexUtils.isInteger(str);

        return IsUtils.is(IsUtils.DEC, str);
    }

    static isHex(str) {

        return MSP430Assembler.default.RegexUtils.isHexadecimal(str);
        return IsUtils.is(`${IsUtils.HEX}`, str);
    }

    static isBin(str) {

        return MSP430Assembler.default.RegexUtils.isBinary(str);

        return IsUtils.is(`${IsUtils.BIN}`, str);
    }

    static isMemory(str) {

        return MSP430Assembler.default.RegexUtils.isAddress(str);

        return IsUtils.is(`\\[${IsUtils.HEX}\\]`, str) || IsUtils.is(`\\[${IsUtils.DEC}\\]`, str);
    }

    static isRegister(str) {

        return MSP430Assembler.default.RegexUtils.isRegister(str);

        return IsUtils.is(`R${IsUtils.DEC}`, str)
    }

    static isImmediate(str) {

        // console.debug(MSP430Assembler.default);

        return MSP430Assembler.default.RegexUtils.isImmediate(str);

        return IsUtils.is(`\\#${IsUtils.HEX}`, str) || IsUtils.is(`\\#${IsUtils.BIN}`, str) || IsUtils.is(`\\#${IsUtils.DEC}`, str)
    }

    static isLabel(str) {
        return new RegExp(`^[a-zA-Z]+\:$`).test(str)
    }

    static isInstruction(value) {

        for (const command of this.COMMANDS) {

            if (value.toString().startsWith(command)) {
                return true;
            }
        }

        return false;
    }
}
