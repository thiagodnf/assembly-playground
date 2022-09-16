class SUB {

    static execute(cpu, source, target) {

        const srcValue = ADD.getValue(cpu, source);
        const targetValue = cpu.getRegistor(target);

        cpu.setRegistor(target, srcValue - targetValue);
    }
}
