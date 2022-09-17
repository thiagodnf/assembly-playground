let cpu;
let romMemory;
let ramMemory;

let BITS = 4;
let REGISTORS = 5;
let MEMORY_SIZE = 16;

let codeEditor;

Number.prototype.toHex = function(f){
    return ConvertUtils.toHex(this);
}

String.prototype.toHex = function(f){
    return ConvertUtils.toHex(parseInt(this));
}

function loadExample() {

    let text = `
        MOV #10, R0
        MOV #20, R1
        JMP 0
    `;

    codeEditor.setValue(text.replaceAll("    ", ""));
}

function loadCode(code) {

    cpu.romMemory.reset();

    let lines = code.split("\n").map(e => e.trim()).filter(el => el.length !== 0);

    let address = 0;

    lines.forEach((line) => {
        cpu.romMemory.setValue(address, line);
        address += 2;
    });
}

function resizeWindow() {
    var h = $(window).height();
    $(".max-height").height(h - 170);
}

$(function () {

    romMemory = new RamMemory($("#rom-memory"), 32);
    ramMemory = new RamMemory($("#ram-memory"), 32);
    cpu = new CPU($("#cpu"), romMemory, ramMemory, 5);

    codeEditor = ace.edit("codeEditor");
    codeEditor.setTheme("ace/theme/monokai");
    codeEditor.session.setMode("ace/mode/assembly_x86");

    loadExample();

    $("#load").click((event) => {
        loadCode(codeEditor.getValue());
    })

    $("#step").click(() => cpu.step());

    $(window).resize(resizeWindow).trigger('resize');
});
