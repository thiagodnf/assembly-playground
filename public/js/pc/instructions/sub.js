/**
 * SUB src, dst
 *
 * The SUB instruction subtracts the value in register “src” from
 * the value in register “dst” and stores the result in register “dst”.
 *
 * Summary: dst = dst - src
 *
 * Example: SUB R3, R0 performs this operation: R0 = R0 - R3
 *
 * The destination operand can be a register.
 * The source operand can be an immediate or register.
 */
class SUB {

    static execute(cpu, src, dst) {

        if (!InstructionUtils.isImmediate(src) && !InstructionUtils.isRegister(src)) {
            throw new Error("Source would be immediate or register");
        }

        if (!InstructionUtils.isRegister(dst)) {
            throw new Error("Destination would be register");
        }

        const srcValue = InstructionUtils.getValue(cpu, src);
        const dstValue = InstructionUtils.getValue(cpu, dst);

        cpu.setRegistor(dst, dstValue - srcValue);
    }
}
