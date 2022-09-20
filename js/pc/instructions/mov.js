/**
 * MOV src, dst
 *
 * The MOVE instruction copies the data from its src argument into its dst argument.
 *
 * Summary: dst = src
 *
 * MOV regSrc, regDst
 * MOV memSrc, regDst
 * MOV regSrc, memDst
 *
 * The destination operand can be a register.
 * The source operand can be an immediate or register.
 */
class MOV {

    /**
     * Execute the instruction
     *
     * @param {CPU} cpu
     * @param {string} src
     * @param {string} dst
     * @returns the next PC
     */
    static execute(cpu, src, dst) {

        if (!IsUtils.isImmediate(src) && !IsUtils.isMemory(src) && !IsUtils.isRegister(src)) {
            throw new Error("MOV: source would be immediate, memory or register");
        }

        if (!IsUtils.isMemory(dst) && !IsUtils.isRegister(dst)) {
            throw new Error("MOV: destination would be memory or register");
        }

        const srcValue = InstructionUtils.getValue(cpu, src)

        if (IsUtils.isRegister(dst)) {
            cpu.setRegistor(dst, srcValue);
        } else if (IsUtils.isMemory(dst)) {
            const pos = parseInt(dst.replace("\[", "").replace("\]", ""));
            cpu.ramMemory.setValue(pos, srcValue);
        }

        return cpu.getPC() + cpu.getInstructionStep()
    }
}
