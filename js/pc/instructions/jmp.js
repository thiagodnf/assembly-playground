class JMP {

    static execute(cpu, dst) {

        if (!IsUtils.isDec(dst) && !IsUtils.isHex(dst)) {
            throw new Error("JMP: source would be decimal or hexadecimal");
        }

        return ConvertUtils.toInt(dst);
    }
}
