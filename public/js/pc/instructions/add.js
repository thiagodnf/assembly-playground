class ADD {

    static execute(cpu, source, target) {

        const srcValue = ADD.getValue(cpu, source);
        const targetValue = cpu.getRegistor(target);

        cpu.setRegistor(target, srcValue + targetValue);
    }

    static getValue(cpu, src) {

        let value = 0;

        if (src.startsWith("#")) {
            value = parseInt(src.replace("#", ""));
        } else if (src.startsWith("R")) {
            value = cpu.getRegistor(src);
        }

        return value;
    }
}
