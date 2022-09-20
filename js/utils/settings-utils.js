class Settings {

    static INSTRUCTION_LENGTH = "instruction-length";

    static WORD_SIZE = "word-size";

    static ROM_MEMORY_SIZE = "rom-memory-size";

    static RAM_MEMORY_SIZE = "ram-memory-size";

    static SHOW_MEMORY_ADDRESS_AS = "show-memory-address-as";

    static SHOW_MEMORY_DATA_AS = "show-memory-data-as";

    static save(key, value) {
        localStorage.setItem(key, value);
    }

    static get(key) {
        return localStorage.getItem(key);
    }

    static setInstructionLength(value){
        Settings.save(Settings.INSTRUCTION_LENGTH, value);
    }

    static getInstructionLength() {
        return parseInt(Settings.get(Settings.INSTRUCTION_LENGTH) || 8);
    }

    static getWordSize() {
        return parseInt(Settings.get(Settings.WORD_SIZE) || 4);
    }

    static setWordSize(value){
        Settings.save(Settings.WORD_SIZE, value);
    }

    static getRamMemorySize() {
        return parseFloat(Settings.get(Settings.RAM_MEMORY_SIZE) || 4);
    }

    static setRamMemorySize(value){
        Settings.save(Settings.RAM_MEMORY_SIZE, value);
    }

    static getRomMemorySize() {
        return parseFloat(Settings.get(Settings.ROM_MEMORY_SIZE) || 4);
    }

    static setRomMemorySize(value){
        Settings.save(Settings.ROM_MEMORY_SIZE, value);
    }

    static setShowMemoryDataAs(value){
        Settings.save(Settings.SHOW_MEMORY_DATA_AS, value);
    }

    static getShowMemoryDataAs(){
        return Settings.get(Settings.SHOW_MEMORY_DATA_AS) || "dec";
    }

    static setShowMemoryAddressAs(value){
        Settings.save(Settings.SHOW_MEMORY_ADDRESS_AS, value);
    }

    static getShowMemoryAddressAs(){
        return Settings.get(Settings.SHOW_MEMORY_ADDRESS_AS) || "hex";
    }
}
