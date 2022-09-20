class OutputUtils{

    static msg(txt){
        $("#output").append(`<p class='my-0'>${txt}</p>`);
        OutputUtils.scroll();
    }

    static error(txt){
        $("#output").append(`<p class='my-0 text-danger'>${txt}</p>`);
        OutputUtils.scroll();
    }

    static scroll(){
        $("#output").animate({scrollTop: document.body.scrollHeight},"fast");
    }
}
