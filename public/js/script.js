let cpu;
let romMemory;
let ramMemory;

let codeEditor;

let BITS = 4;
let REGISTORS = 5;

Number.prototype.toHex = function (f) {
    return ConvertUtils.toHex(this);
}

String.prototype.toHex = function (f) {
    return ConvertUtils.toHex(parseInt(this));
}

function loadExample() {

    let text = `
    MOV #0b0001, [0x0]
    MOV #0b0001, [0x1]
    MOV #0x2, [0x2]
    `;

    codeEditor.setValue(text.replaceAll("    ", ""));
}

function loadCode(code) {

    cpu.reset();

    let lines = code.split("\n")
                    .map(e => e.trim())
                    .map(e => e.replace(/\;(.*)/g,''))
                    .filter(el => el.length !== 0);

    let address = 0;

    lines.forEach((line) => {
        cpu.romMemory.setValue(address, line);
        address += Settings.getInstructionLength();
    });
}

function resizeWindow() {

    const w = $(window).height();

    $(".panels").height(w - 150);

    $(".panel-ram-memory").height($(".panels").height());
    $(".panel-rom-memory").height($(".panels").height());
    $(".panel-left").height($(".panels").height());

    $(".panel-source-code").height($(".panel-left").height() * 0.75);
    $(".panel-cpu").height($(".panel-left").height() * 0.75);

    $(".panel-output").height($(".panel-left").height() * 0.25 - 20);
}

$(function () {

    romMemory = new RamMemory($("#rom-memory"), 32);
    ramMemory = new RamMemory($("#ram-memory"), 32);
    cpu = new CPU($("#cpu"), romMemory, ramMemory, 5);

    codeEditor = ace.edit("codeEditor");
    codeEditor.setTheme("ace/theme/monokai");
    codeEditor.session.setMode("ace/mode/assembly_x86");

    loadExample();

    $("#load").click(() => {
        loadCode(codeEditor.getValue());
    })

    $("#step").click(() => { cpu.step() });

    $(window).resize(resizeWindow).trigger('resize');

    window.onerror = function (message, url, lineNumber) {
        OutputUtils.error(message);
        return true;
    };

    window.console.log = function (key) {
        OutputUtils.msg(key);
    }

    OutputUtils.msg("Welcome!");

    $("#instruction-length").on("change", function () {
        Settings.saveInstructionLength($(this).find("option:selected").val());
        cpu.updateAll();
    }).val(Settings.getInstructionLength());

    $("#memory-address-as").on("change", function () {
        Settings.saveMemoryAddressAs($(this).find("option:selected").val());
        cpu.updateAll();
    }).val(Settings.getMemoryAddressAs());

    $("#memory-value-as").on("change", function () {
        Settings.saveMemoryValueAs($(this).find("option:selected").val());
        cpu.updateAll();
    }).val(Settings.getMemoryValueAs());

    // console.log(Number(-15).toString(16))


});

