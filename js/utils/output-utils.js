let outputEditor;

outputEditor = ace.edit("outputEditor");
outputEditor.setTheme("ace/theme/dracula");
outputEditor.setShowPrintMargin(false);
outputEditor.setReadOnly(true);
outputEditor.resize(true);
outputEditor.renderer.setShowGutter(false);
outputEditor.session.setUseWorker(false);
outputEditor.session.setUseSoftTabs(true);

class OutputUtils {

    static lineNumber = 0;

    static msg(txt) {
        $("#output").append(`<p class='my-0'>${txt}</p>`);
        OutputUtils.scroll();
    }

    static error(txt) {
        OutputUtils.append("error", txt+"\n");
    }

    static clear() {
        outputEditor.setValue("", -1);
    }

    static append(type, key, value) {

        var Range = ace.require('ace/range').Range;

        let currentLine = OutputUtils.lineNumber++;

        outputEditor.setValue(outputEditor.getValue() + key, -1);

        // if(type == "error"){
        //     outputEditor.session.addMarker(new Range(currentLine, 0, currentLine, 1), "myMarker", "fullLine");
        // }

        outputEditor.scrollToLine(50, true, true, function () { });

        OutputUtils.scroll();
    }

    static scroll() {
        $("#output").animate({ scrollTop: document.body.scrollHeight }, "fast");
    }
}
