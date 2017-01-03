/**
 * 生成uuid
 */
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    var uuid = s.join("");
    return uuid;
}

function obj2String(obj){
    var description = "";
    for(var i in obj){
        description += "<font color=red>" + i + "</font>";
        description += " : {";
        description += "<br>";
        var property=obj[i];
        if(typeof property =="object"){
            for(var y in property){
                var property2=property[y];

                if(typeof property2 =="object"){
                    description += " : {";
                    for(var k in property2){
                        var property3=property[k];
                        description += k+" = "+property3+"<br>";
                    }
                    description += " }<br><br>";
                }else{
                    description += y+" = "+property2+"<br>";
                }

            }
        }else{
            description+=i+" = "+property+"<br>";
        }
        description += "}<br><br>";
    }
    return description;
}