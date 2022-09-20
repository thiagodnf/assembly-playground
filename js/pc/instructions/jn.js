class JN {

    static execute(cpu, dst) {

        if (!IsUtils.isDec(dst) && !IsUtils.isHex(dst)) {
            throw new Error("JN: source would be decimal or hexadecimal");
        }

        const sr = cpu.getSR();

        if (sr.n == 1) {
            return ConvertUtils.toInt(dst);
        }

        return cpu.getPC() + cpu.getInstructionStep();
    }
}