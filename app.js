var express = require("express");
var app = express();

const port = process.env.PORT || 2410;

app.get("/", function(req, res){
	// res.send("<font color = red>hello hai nguyen</font>");
	res.sendFile(__dirname + "/index.html");
});
app.get("/thuatngu", function(req, res){
	// res.send("<font color = red>hello hai nguyen</font>");
	res.sendFile(__dirname + "/thuatngu.html");
});


app.listen(port, () => {
	console.log("ser on: " + port);
});

// app.get("/gioithieu.aspx", function(req, res){
// 	// res.send("<font color = red>hello hai nguyen</font>");
// 	res.send("I'M GIOITHIEU.ASPX");
// });

// app.get("/tinhtong/:so1/:so2", function(req, res){
// 	// res.send("<font color = red>hello hai nguyen</font>");
// 	// var n = parseInt(req.params.so1);
// 	var n = parseInt(req.params.so1);
// 	var m = parseInt(req.params.so2);
//  	var sum = m + n;	 
// 	res.send("Ket qua la: " + sum);
	
// });