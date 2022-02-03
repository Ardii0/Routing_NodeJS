var url = require("url");
var adr = "https://www.langensari.com/search.php?sayur=wortel&Daging-sapi";
var q = url.parse(adr, true);

//Hasil pare URL
console.log("protocol: " + q.protocol);
console.log("hostname: " + q.host);
console.log("pathname: " + q.pathname);
console.log("params: " + q.search);

var qdata = q.query;
console.log(qdata);
