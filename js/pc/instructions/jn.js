class JN {

    static execute(cpu, dst) {

        if (!IsUtils.isMemory(dst)) {
            throw new Error("JN: source would be a memory location");
        }

        const hex = dst.replace("[","").replace("]", "");

        const sr = cpu.getSR();

        if (sr.n == 1) {
            return ConvertUtils.toInt(hex);
        }

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
