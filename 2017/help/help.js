const find4 = (x,y,arrayOfArrays,wantedChar) => {
	wantedChar = wantedChar || 1;
	let returnable = [];
	if(x > 0 && x < arrayOfArrays[y].length-1){
		arrayOfArrays[y][x-1] === wantedChar ? returnable.push({x:x-1,y:y}):false;
		arrayOfArrays[y][x+1] === wantedChar ? returnable.push({x:x+1,y:y}):false;
	}
	else if(x === 0){
		arrayOfArrays[y][x+1] === wantedChar ? returnable.push({x:x+1,y:y}):false;
	}
	else if(x === arrayOfArrays[y].length - 1){
		arrayOfArrays[y][x-1] === wantedChar ? returnable.push({x:x-1,y:y}):false;	
	}
	if(y > 0 && y < arrayOfArrays.length-1){
		arrayOfArrays[y+1][x] === wantedChar ? returnable.push({x:x,y:y+1}):false;
		arrayOfArrays[y-1][x] === wantedChar ? returnable.push({x:x,y:y-1}):false;
	}
	else if(y === 0){
		arrayOfArrays[y+1][x] === wantedChar ? returnable.push({x:x,y:y+1}):false;
	}
	else if(y === arrayOfArrays.length-1){
		arrayOfArrays[y-1][x] === wantedChar ? returnable.push({x:x,y:y-1}):false;
	}
	return returnable;
}

const numToLetter =chr => 
	String.fromCharCode(97 + chr);

const hex2bin = hex =>
	("0000" + (parseInt(hex, 16)).toString(2)).substr(-4);

const num2Hex = num =>
	num.toString(16);
