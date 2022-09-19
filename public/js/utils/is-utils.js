class IsUtils {

    static COMMANDS = ["ADD", "SUB", "MOV", "CMP", "JN", "JZ", "JMP"];

    static DEC = "[0-9]+";

    static HEX = "0[xX][0-9a-fA-F]+";

    static BIN = "0[bB][01]+";

    static is(str) {
        return new RegExp(`^${str}$`)
    }

    static isDec(str) {
        return IsUtils.is(IsUtils.DEC).test(str)
    }

    static isHex(str) {
        return IsUtils.is(`${IsUtils.HEX}`).test(str)
    }

    static isBin(str) {
        return IsUtils.is(`${IsUtils.BIN}`).test(str)
    }

    static isMemory(str) {
        return IsUtils.is(`\\[${IsUtils.HEX}\\]`).test(str) || IsUtils.is(`\\[${IsUtils.DEC}\\]`).test(str);
    }

    static isRegister(str) {
        return IsUtils.is(`R${IsUtils.DEC}`).test(str)
    }

    static isImmediate(str) {
        return IsUtils.is(`\\#${IsUtils.HEX}`).test(str) || IsUtils.is(`\\#${IsUtils.BIN}`).test(str) || IsUtils.is(`\\#${IsUtils.DEC}`).test(str)
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
