var hiragana = [

	{"a" : "あ"},
	{"i" : "い"},
	{"u" : "う"},
	{"e" : "え"},
	{"o" : "お"},
	{"ka" : "か"},
	{"ki" : "き"},
	{"ku" : "く"},
	{"ke" : "け"},
	{"ko" : "こ"},
	{"sa" : "さ"},
	{"shi" : "し"},
	{"su" : "す"},
	{"se" : "せ"},
	{"so" : "そ"},
	{"ta" : "た"},
	{"chi" : "ち"},
	{"tsu" : "つ"},
	{"te" : "て"},
	{"to" : "と"},
	{"na" : "な"},
	{"ni" : "に"},
	{"nu" : "ぬ"},
	{"ne" : "ね"},
	{"no" : "の"},
	{"ha" : "は"},
	{"hi" : "ひ"},
	{"fu" : "ふ"},
	{"he" : "へ"},
	{"ho" : "ほ"},
	{"ma" : "ま"},
	{"mi" : "み"},
	{"mu" : "む"},
	{"me" : "め"},
	{"mo" : "も"},
];

function shuffle(sourceArray) {

    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

//build the div item with object. show is the symbol we display : hiragana or romaji
function generateItem(obj,show) {

	var display = (show == "romaji") ? Object.keys(obj) : obj[Object.keys(obj)];
	var hide = (show == "romaji") ? obj[Object.keys(obj)] : Object.keys(obj);

	return "<div class='item' attr-hide='"+ hide +"'><div class='show'>"+ display +"</div><input type='text'></div>";
}

function generateItems(show) {

	$("#container").empty();
	var mixed_hiragana = shuffle(hiragana);
	$(mixed_hiragana).each(function(k,v){
		
		$("#container").append(generateItem(v, show));
	});

	checkInput();
}

function checkInput() {

	$(".item input").on("keyup", function(){
		var hide = $(this).parent().attr("attr-hide");
		var text = $(this).val();

		if (hide == text) {
			$(this).parent().addClass("success");
		} else {
			$(this).parent().removeClass("success");
		}
	});
}

//MAIN
$(document).ready(function(){

	$(".generate.hira").click(function() {
		generateItems("hiragana");
	});

	$(".generate.roma").click(function() {
		generateItems("romaji");
	});
});


