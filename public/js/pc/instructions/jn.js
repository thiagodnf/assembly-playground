class JN {

    static execute(cpu, dst) {

        if (!InstructionUtils.isMemory(dst)) {
            throw new Error("JN: source would be memory");
        }

        const targetValue = parseInt(dst);

        const sr = cpu.getSR();

        if (sr.n == 1) {
            return targetValue;
        }

        return cpu.getPC() + Settings.getInstructionLength();
    }
}
