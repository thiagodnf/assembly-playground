class Settings {

    static INSTRUCTION_LENGTH = "instruction-length";

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
}
