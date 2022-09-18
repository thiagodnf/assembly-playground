class JZ {

    static execute(cpu, dst) {

        if (!InstructionUtils.isMemory(dst)) {
            throw new Error("JZ: source would be memory");
        }

        const targetValue = parseInt(dst);

        const sr = cpu.getSR();

        if (sr.z == 1) {
            return targetValue;
        }

        return cpu.getPC() + Settings.getInstructionLength();
    }
}
