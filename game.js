
Words = {};
Words.List = [];


Words.List[0] = "rare";
Words.List[1] = "aye";
Words.List[2] = "bae";
Words.List[3] = "cya";
Words.List[4] = "dae";
Words.List[5] = "eae";
Words.List[6] = "fae";
Words.List[7] = "ggee";
Words.List[8] = "hee";
Words.List[9] = "iee";
//creating words


Words.Length = Words.List.length;


Main = {};
Main.WordArray = [];
Main.WordUArray = [];
Main.Lives = 4;
Main.NumInWordBank = Words.Length;

//setting principles 

Main.Word = "test";
Main.WordU = "";

Main.PullWord = function() {
		Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];

}

Main.SetUnderline = function() {
	Main.PullWord();
	for (i=0; i<Main.Word.length; i++) {
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
		//Makes it so word is automatically displayed as an underline
	}

Main.WordU = Main.WordUArray.join("");
//used to get rid of spacing between letters
document.getElementById("word").innerHTML = Main.WordU;
document.getElementById("numLetters").innerHTML = Main.Word.Length;

}

Main.UpdateLetter = function(letter) {
	Main.Changes = 0;
	for (i=0; i<Main.Word.length; i++) {
		Main.WordArray[i] = Main.Word.CharAt(i);
		if (Main.Word.CharAt(i) == letter){
			Main.WordUArray [i] == letter;
			Main.Changes += 1;
		}
	}
	if (Main.Changes < 1) {
		Main.Lives -=1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}
	
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("Word").innerHTML = Main.WordU;

	Main.Word1 = Main.WordArray.join("");
	//comparison
	Main.Word2 = Main.WordUArray.join("");

	if(Main.Word1 == Main.Word2) {
		alert("You Won!");
	}

	if(Main.Lives < 1 ){
		document.getElementById("word").innerHTML == Main.Word1;
		alert("You have run out of lives!");

	}
}





Main.PullWord();

$(function(){
	$("#a").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("a");
	});
	}
);