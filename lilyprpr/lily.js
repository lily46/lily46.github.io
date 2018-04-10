function Output(str){
	//process.stdout.write(str);
	document.write(str);
}

const ORENOYOME = "リリーホワイト";
var strs = "";

var main = function(){
	var rand = Math.floor(Math.random() * (ORENOYOME.length));
	var str = ORENOYOME.substr(rand, 1);
	Output(str);
	strs += str;
	if(strs.length == ORENOYOME.length + 1){
		strs = strs.substr(1, ORENOYOME.length);;
	}
	
	if(strs != ORENOYOME){
		setTimeout(main, 1)
	}else{
		document.write("おわりりー");
	}
}

main();