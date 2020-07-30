// var moment = require("moment");
// var datee = new Date();
// var mydate= moment(datee).format("LL");
// console.log(mydate);
YAML = require('yamljs');

var print;
document.getElementById('import').onclick = function() {
var files = document.getElementById('selectFiles').files;
//console.log(files);
if (files.length <= 0) {
    return false;
}

var fr = new FileReader();

fr.onload = function(e) { 
var obj = YAML.parse(e.target.result);
console.log(obj);
var jsonStr = JSON.stringify(obj);
//console.log(jsonStr);

var result = JSON.parse(jsonStr);
//console.log(result);
var formatted = JSON.stringify(result, null, 2);
print = formatted;
//console.log(formatted);

var obj = result;

    var form = $("#form").medea(obj);

    form.on("medea.add",    utils.logEvent("events"));
    form.on("medea.cancel", utils.logEvent("events"));
    form.on("medea.toggle", utils.logEvent("events"));
    form.on("medea.submit", utils.logObjectChangeEvent("source"));

    utils.prettyPrintSource(obj, "source");
//console.log(formatted);
}
console.log(print);
fr.readAsText(files.item(0));
};