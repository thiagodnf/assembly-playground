/**
 * ADD regSrc, regDst
 *
 * The ADD instruction adds the value in register "regSrc" to the value in register
 * "regDst" and stores the result in register "regDst"
 *
 * Summary: regDst = regDst + regSrc
 *
 * Example: ADD R1, R2 performs this operation: R2 = R1 + R2
 */
class ADD {

    static execute(cpu, src, dst) {

        if (!InstructionUtils.isImmediate(src) && !InstructionUtils.isRegister(src)) {
            throw new Error("SUB: source would be immediate or register");
        }

        if (!InstructionUtils.isRegister(dst)) {
            throw new Error("SUB: Destination would be register");
        }

        const srcValue = InstructionUtils.getValue(cpu, src);
        const dstValue = InstructionUtils.getValue(cpu, dst);

        cpu.setRegistor(dst, dstValue + srcValue);
    }
}
