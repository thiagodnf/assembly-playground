/**
 * ADD regSrc, regDst
 *
 * The ADD instruction adds the value in register "regSrc" to the value in register
 * "regDst" and stores the result in register "regDst"
 *
 * Summary: regDst = regDst + regSrc
 *
 * Example: ADD R1, R2 performs this operation: R2 = R2 + R1
 */
class ADD {

    static execute(cpu, src, dst) {

        if (!InstructionUtils.isImmediate(src) && !InstructionUtils.isRegister(src)) {
            throw new Error("ADD: source would be immediate or register");
        }

        if (!InstructionUtils.isRegister(dst)) {
            throw new Error("ADD: Destination would be register");
        }

        const srcValue = InstructionUtils.getValue(cpu, src);
        const dstValue = InstructionUtils.getValue(cpu, dst);

        cpu.setRegistor(dst, dstValue + srcValue);

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
