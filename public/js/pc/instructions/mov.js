class MOV {

    static execute(cpu, source, target) {

        const srcValue = MOV.getValue(cpu, source)

        if (target.startsWith("R")) {
            cpu.setRegistor(target, srcValue);
        } else if (target.startsWith("[")) {
            const pos = parseInt(target.replace("\[", "").replace("\]", ""));
            cpu.ramMemory.setValue(pos, srcValue);
        }
    }

    static getValue(cpu, src) {

        let value = 0;

        if (src.startsWith("#")) {
            value = parseInt(src.replace("#", ""));
        } else if (src.startsWith("[")) {
            const pos = parseInt(src.replace("\[", "").replace("\]", ""));
            value = cpu.ramMemory.getValue(pos);
        } else if (src.startsWith("R")) {
            value = cpu.getRegistor(src);
        }

        return value;
    }
}
