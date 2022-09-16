class JZ {

    static execute(cpu, target) {

        const targetValue = parseInt(target);

        const sr = cpu.getSR();

        if (sr.z == 1) {
            return targetValue;
        }
    }
}
