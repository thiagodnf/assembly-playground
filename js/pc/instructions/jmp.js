class JMP {

    static execute(cpu, dst) {

        if (!IsUtils.isMemory(dst)) {
            throw new Error("JMP: source would be a memory location");
        }

        const hex = dst.replace("[","").replace("]", "");

        return ConvertUtils.toInt(hex);
    }
}
