class JN {

    static execute(cpu, target) {

        const targetValue = parseInt(target);

        const sr = cpu.getSR();

        if (sr.n == 1) {
            return targetValue;
        }
    }
}
