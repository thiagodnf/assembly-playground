class Settings {

    static INSTRUCTION_LENGTH = "instruction-length";

    static MEMORY_ADDRESS_AS = "memory-address-as";

    static MEMORY_VALUE_AS = "memory-value-as";

    static save(key, value) {
        localStorage.setItem(key, value);
    }

    static get(key) {
        return localStorage.getItem(key);
    }

    static saveInstructionLength(value) {
        Settings.save(Settings.INSTRUCTION_LENGTH, value);
    }

    static getInstructionLength() {
        return parseInt(Settings.get(Settings.INSTRUCTION_LENGTH) || 1);
    }

    static saveMemoryValueAs(value) {
        Settings.save(Settings.MEMORY_VALUE_AS, value);
    }

    static getMemoryValueAs() {
        return Settings.get(Settings.MEMORY_VALUE_AS) || "decimal";
    }

    static saveMemoryAddressAs(value) {
        Settings.save(Settings.MEMORY_ADDRESS_AS, value);
    }

    static getMemoryAddressAs() {
        return Settings.get(Settings.MEMORY_ADDRESS_AS) || "hex";
    }
}
