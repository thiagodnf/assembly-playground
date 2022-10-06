

let cpu;
let codeEditor;
let isPlaying = false;
let output;

function loadExample(filename) {

    $.get(`data/examples/${filename}`, function (response) {
        codeEditor.setValue(response);
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

function highlightPC() {
    $(".panel-rom-memory").find(`td`).removeClass("current-pc");
    $(".panel-rom-memory").find(`td[data-address=${cpu.getPC()}]`).addClass("current-pc");
}

function step() {
    cpu.step()
    highlightPC();
}

function updateScreen() {
    cpu.updateAll();
    highlightPC();
}

function setEnabled($el, enabled) {
    $el.prop("disabled", enabled ? false : "disabled");
}

function loadInitialSourceCode() {

    const storedSourceCode = Settings.getSourceCode();

    if (storedSourceCode) {
        codeEditor.setValue(storedSourceCode);
    } else {
        loadExample("if-else.asm");
    }
}

$(function () {

    output = new Output();
    codeEditor = new CodeEditor();

    output.println("Welcome!");

    cpu = new CPU($("#cpu"), 7);
    cpu.romMemory = new RamMemory($("#rom-memory"), cpu, Settings.getRomMemorySize());
    cpu.ramMemory = new RamMemory($("#ram-memory"), cpu, Settings.getRamMemorySize());
    cpu.reset();

    // When the user types anything in the source
    // code editor, let's save in the browser
    codeEditor.onChange(function (e) {
        Settings.setSourceCode(codeEditor.getValue());
    });

    loadInitialSourceCode();

    $("#load").click((event) => {

        event.preventDefault();

        output.print("Loading...");

        setEnabled($(".toolbar .btn"), false);

        cpu.loadCode(codeEditor.getValue()).then(() => {
            output.print("Done!\n");
            highlightPC();
        }).catch((error) => {
            output.error(error);
        }).then(() => {
            setEnabled($(".toolbar .btn"), true);
        });
    })

    $("#step").click(() => {
        step();
    });

    $("#play").click(function () {

        if (isPlaying) {
            return;
        }

        isPlaying = true;

        $(this).addClass("d-none");
        $("#stop").removeClass("d-none");
        $("#step").prop("disabled", "disabled");
        $("#load").prop("disabled", "disabled");
        $("#settings").prop("disabled", "disabled");

        var play = function () {

            if (isPlaying) {
                step();
                setTimeout(play, Settings.getCpuSpeed());
            }
        }

        setTimeout(play, 1);
    });

    $("#stop").click(function () {

        isPlaying = false;

        $(this).addClass("d-none");
        $("#play").removeClass("d-none");
        $("#step").prop("disabled", "");
        $("#load").prop("disabled", "");
        $("#settings").prop("disabled", "");
    }).addClass("d-none");

    $(window).resize(resizeWindow).trigger('resize');

    highlightPC();

    $(".examples .dropdown-item").on("click", function () {

        const filename = $(this).data("filename");

        loadExample(filename);
    });

    $("#cpu-speed").on("change", function () {
        Settings.setCpuSpeed($(this).find("option:selected").val());
        updateScreen();
    }).val(Settings.getCpuSpeed());

    $("#word-size").on("change", function () {
        Settings.setWordSize($(this).find("option:selected").val());
        updateScreen();
    }).val(Settings.getWordSize());

    $("#ram-memory-size").on("change", function () {
        Settings.setRamMemorySize($(this).find("option:selected").val());
        updateScreen();
    }).val(Settings.getRamMemorySize());

    $("#rom-memory-size").on("change", function () {
        Settings.setRomMemorySize($(this).find("option:selected").val());
        updateScreen();
    }).val(Settings.getRomMemorySize());

    $('input[type=radio][name="memory-show-data-as"]').on('change', function () {
        Settings.setShowMemoryDataAs($(this).val());
        updateScreen();
    }).filter(`[value="${Settings.getShowMemoryDataAs()}"]`).attr('checked', true);

    $('input[type=radio][name="memory-show-address-as"]').on('change', function () {
        Settings.setShowMemoryAddressAs($(this).val());
        updateScreen();
    }).filter(`[value="${Settings.getShowMemoryAddressAs()}"]`).attr('checked', true);
});
