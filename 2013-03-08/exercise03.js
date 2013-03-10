function exercise03(word){ 
	return word.toUpperCase(); //a
}

function exercise03b(){
	var textUC ="";
	var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	var arr = text.split(" ");
	for(var i = 0; i < arr.length; i++){
		textUC += arr[i].toUpperCase() + " ";
	}
	return textUC;
}