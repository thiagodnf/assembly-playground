class CMP {

    static execute(cpu, source, target) {

        const srcValue = ADD.getValue(cpu, source);
        const targetValue = cpu.getRegistor(target);

        const diff = targetValue - srcValue;

        cpu.setSR(diff < 0 ? 1: 0, diff == 0? 1: 0);
    }
}
