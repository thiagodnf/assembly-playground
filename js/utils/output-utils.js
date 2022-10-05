class OutputUtils {

    static $el = $("#output");

    static text(txt) {
        OutputUtils.append("default", txt);
    }

    static error(txt) {
        OutputUtils.append("error", txt);
    }

    static clear() {
        OutputUtils.$el.text("");
    }

    static append(type, text) {

        let cls = "";

        if (type == "error") {
            cls = "bg-danger";
        } else if (type === "warning") {
            cls = "bg-warning";
        }

        let str = String(text).replaceAll("\n", "<br/>");

        OutputUtils.$el.append(`<span class="${cls}">${str}</span>`);

        OutputUtils.scroll();
    }

    static scroll() {
        OutputUtils.$el.scrollTop(OutputUtils.$el[0].scrollHeight);
    }
}
