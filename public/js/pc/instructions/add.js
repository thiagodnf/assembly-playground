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

        if (!IsUtils.isImmediate(src) && !IsUtils.isRegister(src)) {
            throw new Error("ADD: source would be immediate or register");
        }

        if (!IsUtils.isRegister(dst)) {
            throw new Error("ADD: Destination would be register");
        }

        let srcValue = InstructionUtils.getValueAsInt(cpu, src);
        let dstValue = InstructionUtils.getValueAsInt(cpu, dst);

        cpu.setRegistor(dst, dstValue + srcValue);

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
