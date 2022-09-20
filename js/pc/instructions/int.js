class INT {

    static execute(cpu, src) {

        if (src !== "10h") {
            throw new Error("INT: source should be \"10h\"");
        }

        console.log(ConvertUtils.toInt(cpu.getLastRegister()));

        return cpu.getPC() + cpu.getInstructionStep();
    }
}
