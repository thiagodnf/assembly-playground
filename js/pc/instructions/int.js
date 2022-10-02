class INT {

    static execute(cpu, src) {

        if (!["10h", "20h", "30h", "40h"].includes(src)) {
            throw new Error("INT: source should be '10h', '20h', or '30h'");
        }

        if (src === "10h") {
            OutputUtils.append("default", ConvertUtils.toInt(cpu.getLastRegister()));
        }
        if (src === "20h") {
            OutputUtils.append("default", " ");
        }
        if (src === "30h") {
            OutputUtils.append("default", "\n");
        }
        if (src === "40h") {
            OutputUtils.clear();
        }

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
