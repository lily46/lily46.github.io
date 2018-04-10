const ORENOYOME = "リリーホワイト";
var strs = "";
var log = document.getElementById("log");
var total = document.getElementById("str_count");

function Output(str){
	log.textContent += str;
}

function OnButtonClick() {
	log.textContent = "";
}

var main = function(){
	clearCount = parseInt(total.textContent) + 1
	total.textContent = clearCount;

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
		var elem = document.getElementById("lily");
		elem.innerHTML = '<pre>　　　　 　 ／￣｀ 　 、<br>\
　　　　　/　　　　　__ ＼<br>\
　　　 r-\' 、　　 ／::::| 　 ＼<br>\
　　 　|:::::__＼r/::::::::::!￣￣｀\'　 、<br>\
　　／|::::::::::;:ｲ--─┘　　　　 　 ヽ.<br>\
/´￣ヽ￣｀＞ \'"´￣￣￣￣｀　 、　＼__<br>\
　　 　 \',／ 　／　　／ 　 　 　 　 ＼　 ﾊ＞､<br>\
./　　 　\',　 ,.\'　　 /__」　 ,　　　 |　　 ∨´　　 ｀\'　、<br>\
　　　　 .| ./　　 /＿_|／|　 　 ,ﾊ　　 ﾊ　　　 　　 ＼<br>\
　　　 　 ! \'　　.ｧ\'´,ﾊ｀ヽ !　 ／｀ﾄ / |　|　　　　　　　 ヽ.<br>\
　　　 　 |\'　　,弋__り　　|／ ｧTlﾊ.//　.! 　 |./　 　 　 　|<br>\
　　　 　 |　 /.xx　　　　　　 じ\' ﾊ.ｲ　　|＼/´　 　 　　 ,\'<br>\
　　　 　 |　∧　　　　　　 \'　 xx!/ || 　 !／　　　　　　,\'<br>\
　　　　∧ ,\'　.ﾄ　 　 ｀　ｰ 　　人　! _／　　　　　　　/　, - 、<br>\
\',　 　 / ∧　 |＼＞_＿＿. イ.|　 /´ | |　　 　　 　 /／　　 |<br>\
ﾊ　　,\' /　 ＼|.　 ＼　　　 ｀ヽ!／　　| | 　　　　　,.\'　　　　 .|<br>\
　!　 | |　 /　　　 　.}￣ヽ.ｒ ｒ‐‐ｧ　 　! !　 　 　,. \'|＼ ./　　 |<br>\
.∧＼ |／　　　 　 /|:::::::::}-{::::::{＼　//　　 ／　,\'　　ヽ. 　 ﾊ<br>\
\'　 ∨/　　　 　 ／　｀ア::|ﾊ::´|. ＼ ヾ.,.　イ　　/　　　　∨ 　!<br>\
　 .//　　　 　 ,\'　　,.イ:::::|　|::::!　　｀∨　 .|. ／　,　　ﾄ 、| 　 |<br>\
＼| |　　　　／| ／ 　 ￣ ｌ/￣　　　.八　イ 　 /|　 /　∨ 　,\'<br>\
　/＼ヽ.　　　/´　　　　　/　　　　 ｲ　 ヽ | ／　|／　　　.／<br>\
<a href="https://twitter.com/intent/tweet?text=リリーホワイトを' + clearCount +'回で出しました。　https://lily46.github.io/lilyprpr/&hashtags=リリージェネレータ" class="twitter-hashtag-button" data-show-count="false">結果をツイート</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><br>\
AA元：<a href="http://touhou-aamatome.sakura.ne.jp/">東方AA纏メ処</a></pre>'
	}

	for(i = 3; i <= 6; ++i){
		if(strs.substr(0, i) == ORENOYOME.substr(0, i)){
			var elem = document.getElementById(i + "_count");
			elem.textContent = parseInt(elem.textContent) + 1;
		}
	}
}

main();