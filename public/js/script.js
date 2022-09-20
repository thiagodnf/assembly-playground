let cpu;

let codeEditor;

let BITS = 4;

// Number.prototype.toHex = function (f) {
//     return ConvertUtils.toHex(this);
// }

// String.prototype.toHex = function (f) {
//     return ConvertUtils.toHex(parseInt(this));
// }

function loadExample() {

    let text = `
    MOV #0b0001, [0x0]
    MOV #0b0001, [0x1]
    JMP 0
    `;

    codeEditor.setValue(text.replaceAll("    ", ""));
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

    cpu = new CPU($("#cpu"), 5);
    cpu.romMemory = new RamMemory($("#rom-memory"), cpu, Settings.getRomMemorySize());
    cpu.ramMemory = new RamMemory($("#ram-memory"), cpu, Settings.getRamMemorySize());
    cpu.reset();

    codeEditor = ace.edit("codeEditor");
    codeEditor.setTheme("ace/theme/monokai");
    codeEditor.session.setMode("ace/mode/assembly_x86");

    loadExample();

    $("#load").click(() => { cpu.loadCode(codeEditor.getValue()); })

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

    $("#word-size").on("change", function () {
        Settings.setWordSize($(this).find("option:selected").val());
        cpu.updateAll();
    }).val(Settings.getWordSize());

    $("#ram-memory-size").on("change", function () {
        Settings.setRamMemorySize($(this).find("option:selected").val());
        cpu.updateAll();
    }).val(Settings.getRamMemorySize());

    $("#rom-memory-size").on("change", function () {
        Settings.setRomMemorySize($(this).find("option:selected").val());
        cpu.updateAll();
    }).val(Settings.getRomMemorySize());

    $('input[type=radio][name="memory-show-value-as"]').on('change', function () {
        Settings.setShowMemoryValueAs($(this).val());
        cpu.updateAll();
    }).filter(`[value="${Settings.getShowMemoryValueAs()}"]`).attr('checked', true);

    $('input[type=radio][name="memory-show-address-as"]').on('change', function () {
        Settings.setShowMemoryAddressAs($(this).val());
        cpu.updateAll();
    }).filter(`[value="${Settings.getShowMemoryAddressAs()}"]`).attr('checked', true);

});
