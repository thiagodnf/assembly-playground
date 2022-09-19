class Settings {

    static INSTRUCTION_LENGTH = "instruction-length";

    static SHOW_MEMORY_ADDRESS_AS = "show-memory-address-as";

    static SHOW_MEMORY_VALUE_AS = "show-memory-value-as";

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

    static setShowMemoryValueAs(value){
        Settings.save(Settings.SHOW_MEMORY_VALUE_AS, value);
    }

    static getShowMemoryValueAs(){
        return Settings.get(Settings.SHOW_MEMORY_VALUE_AS) || "dec";
    }

    static setShowMemoryAddressAs(value){
        Settings.save(Settings.SHOW_MEMORY_ADDRESS_AS, value);
    }

    static getShowMemoryAddressAs(){
        return Settings.get(Settings.SHOW_MEMORY_ADDRESS_AS) || "hex";
    }
}
