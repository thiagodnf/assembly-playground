/**
 * CMP input1, input2
 *
 * input1 can be either a register or immediate value.
 * input2 must be a register.
 *
 * The CMP instruction subtracts the value in input1 from the value in register input2
 * and sets the N and Z bits in SR based on that subtraction.
 *
 * Note that the input1 and input2 registers are not changed by CMP.
 *
 * Only the SR register is changed by the CMP instruction, nothing else is changed
 */
class CMP {

    static execute(cpu, src, dst) {

        if (!IsUtils.isImmediate(src) && !IsUtils.isRegister(src)) {
            throw new Error("CMP: source would be immediate or register");
        }

        if (!IsUtils.isRegister(dst)) {
            throw new Error("CMP: Destination would be register");
        }

        const srcValue = InstructionUtils.getValueAsInt(cpu, src);
        const dstValue = InstructionUtils.getValueAsInt(cpu, dst);

        const diff = dstValue - srcValue;

        cpu.setSR(diff < 0 ? 1 : 0, diff == 0 ? 1 : 0);

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
