/**
 * info,success默认显示5秒,warning,error默认显示10秒
 * timeout=-1，可以使信息一直显示，手动关闭
 */
$(function() {
    var muId = "message-utils-div";
    $("body").append('<div id="' + muId + '"></div>');
    $("#" + muId).css({
        /*居中*/
        "position": "fixed",
        "top": "10%",
        "left": "50%",
        "width": "800px",
        "margin-left": "-400px",

        "z-index": 9999,

        /*透明*/
        "filter":"alpha(opacity=50)",
        "-moz-opacity":0.5,
        "-khtml-opacity": 0.5,
        "opacity": 0.5
    });
    MessageUtils = {
        info: function(msg, timeout) {
            var timeout = timeout === undefined ? 5000 : timeout;
            var id = this.generateId();
            var infoElement = '<div id="[id]" name="message-utils-div-info" class="alert alert-info alert-dismissible">' +
                '<button name="message-utils-close-button" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<strong>Info!</strong> [msg]' +
                '</div>';
            $("#" + muId).append(infoElement.replace("[id]", id).replace("[msg]", msg));
            this.close(id, timeout);
        },
        warning: function(msg, timeout) {
            var timeout = timeout === undefined ? 10000 : timeout;
            var id = this.generateId();
            var infoElement = '<div id="[id]" name="message-utils-div-warning" class="alert alert-warning alert-dismissible">' +
                '<button name="message-utils-close-button" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<strong>Warning!</strong> [msg]' +
                '</div>';
            $("#" + muId).append(infoElement.replace("[id]", id).replace("[msg]", msg));
            this.close(id, timeout);
        },
        error: function(msg, timeout) {
            if(!!$("div[name='message-utils-div-error']").html()){
                return;
            }
            var timeout = timeout === undefined ? 10000 : timeout;
            var id = this.generateId();
            var infoElement = '<div id="[id]" name="message-utils-div-error" class="alert alert-danger alert-dismissible">' +
                '<button name="message-utils-close-button" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<strong>Error!</strong> [msg]' +
                '</div>';
            $("#" + muId).append(infoElement.replace("[id]", id).replace("[msg]", msg));
            this.close(id, timeout);
        },
        success: function(msg, timeout) {
            var timeout = timeout === undefined ? 5000 : timeout;
            var id = this.generateId();
            var infoElement = '<div id="[id]" name="message-utils-div-success" class="alert alert-success alert-dismissible">' +
                '<button name="message-utils-close-button" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<strong>Success!</strong> [msg]' +
                '</div>';
            $("#" + muId).append(infoElement.replace("[id]", id).replace("[msg]", msg));
            this.close(id, timeout);
        },
        generateId: function() {
            return "message-utils-" + new Date().getTime();
        },
        close: function(id, timeout) {
            if (timeout > 0) {
                setTimeout(function(){
                    $("#" + id).fadeOut(1000,function(){
                        $(this).remove();
                    });
                }, timeout);
            }
        }

    };
});
