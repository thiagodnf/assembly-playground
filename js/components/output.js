class Output {

    $el;
    $clearButton;

    constructor() {

        const that = this;

        this.$el = $(".panel-output .card-body");
        this.$clearButton = $(".panel-output #clear");

        this.$clearButton.click(() => {
            that.clear();
        });
    }

    error(text) {
        this.append("ln", "error", text);
    }

    print(text) {
        this.append("", "default", text);
    }

    println(text) {
        this.append("ln", "default", text);
    }

    append(type, color, text) {

        let str = String(text).replaceAll("\n", "<br/>");
        let cls = color === "error" ? "bg-danger" : "";

        if (type === "ln") {
            this.$el.append(`<p class="my-0 ${cls}">${str}</p>`);
        } else {
            this.$el.append(`<span class="my-0 ${cls}">${str}</span>`);
        }

        this.scroll();
    }

    scroll() {
        this.$el.scrollTop(this.$el[0].scrollHeight);
    }

    clear() {
        this.$el.text("");
    }
}
