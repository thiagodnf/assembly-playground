class JMP {

    static execute(cpu, dst) {

        if (!InstructionUtils.isMemory(dst)) {
            throw new Error("JMP: source would be memory");
        }

        return parseInt(dst);
    }
}
