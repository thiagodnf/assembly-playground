class JMP {

    static REGEX = /^JMP\s0[xX][0-9a-fA-F]+|JMP\s[a-zA-Z\_0-9]+$/;

    static execute(cpu, dst) {

        if (!IsUtils.isDec(dst) && !IsUtils.isHex(dst)) {
            throw new Error("JMP: source would be decimal or hexadecimal");
        }

        return ConvertUtils.toInt(dst);
    }
}
