"use strict";
window.onload = function() {  
	console.log("momo");
    var userName = "Al";
    var gg = 888;
    var msg = `Hi, ${userName} (${gg})`;
    console.log(msg)
    //alert(msg)
	/* types:
		undefined
		null
		string
		number
		boolean
		object
		function
	*/
	// let - like var, but with scope analysis
	var reg = /[2..9]\d{6}/;
	var s = "3565656";
	console.log(reg.test("3565656"))
	console.log(typeof(reg))
	
	//(function() {/*do smthng*/;})(); //такой стиль позволяет не заводить глобальных переменных, что опасно, если используются разные сторонние либы
	// goo.gl/sPz0t3
	function factory(x)
	{
		//return function () 
		//{ return t*t;}
		//lambda analog
		return ()=> x*x;
	}
	var fd = factory(5);
	console.log(fd());
	
	// str = JSON.stringify(obj)
	// obj = JSON.parse(str);
	// var hson_props = { title: 11, price:55}
	// var ddd = Object.create(proto, json_props)
}

function gg()
{
	var t = arguments[0];
	var g = arguments[1];
	return t+g;
}