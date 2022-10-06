class CodeEditor {

    codeEditor;

    constructor() {
        this.codeEditor = ace.edit("codeEditor");
        this.codeEditor.setTheme("ace/theme/dracula");
        this.codeEditor.session.setMode("ace/mode/assembly_x86");
        this.codeEditor.session.setUseSoftTabs(true);
    }

    getValue() {
        return this.codeEditor.getValue()
    }

    setValue(value) {
        this.codeEditor.setValue(value);
        this.clearSelection();
    }

    clearSelection() {
        this.codeEditor.getSession().selection.clearSelection();
    }

    on(eventType, callback) {
        this.codeEditor.getSession().on(eventType, function (e) {
            if (callback) {
                callback();
            }
        });
    }

    onChange(callback) {
        this.on("change", callback);
    }
}
