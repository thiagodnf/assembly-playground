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

    static execute(cpu, src, dst) {

        if (!InstructionUtils.isImmediate(src) && !InstructionUtils.isMemory(src) && !InstructionUtils.isRegister(src)) {
            throw new Error("MOV: source would be immediate, memory or register");
        }

        if (!InstructionUtils.isMemory(dst) && !InstructionUtils.isRegister(dst)) {
            throw new Error("MOV: destination would be memory or register");
        }

        const srcValue = InstructionUtils.getValue(cpu, src)

        if (InstructionUtils.isRegister(dst)) {
            cpu.setRegistor(dst, srcValue);
        } else if (InstructionUtils.isMemory(dst)) {
            const pos = parseInt(dst.replace("\[", "").replace("\]", ""));
            cpu.ramMemory.setValue(pos, srcValue);
        }

        return cpu.getPC() + Settings.getInstructionLength();
    }
}
