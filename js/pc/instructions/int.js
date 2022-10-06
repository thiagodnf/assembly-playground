class INT {

    static execute(cpu, src) {

        const output = new Output();

        if (!["10h", "20h", "30h", "40h"].includes(src)) {
            throw new Error("INT: source should be '10h', '20h', '30h', or, '40h'");
        }

        if (src === "10h") {
            output.print(ConvertUtils.toInt(cpu.getLastRegister()));
        }
        if (src === "20h") {
            output.print(" ");
        }
        if (src === "30h") {
            output.println("");
        }
        if (src === "40h") {
            output.clear();
        }

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
