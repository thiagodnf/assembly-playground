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

        if (!IsUtils.isImmediate(src) && !IsUtils.isRegister(src)) {
            throw new Error("SUB: source would be immediate or register");
        }

        if (!IsUtils.isRegister(dst)) {
            throw new Error("SUB: Destination would be register");
        }

        const srcValue = InstructionUtils.getValueAsInt(cpu, src);
        const dstValue = InstructionUtils.getValueAsInt(cpu, dst);

        cpu.setRegistor(dst, dstValue - srcValue);

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
