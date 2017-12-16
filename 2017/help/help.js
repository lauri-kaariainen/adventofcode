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

const num2letter =chr => 
	String.fromCharCode(97 + chr);

const hex2bin = (hex,nulls) =>{
	nulls = nulls ||4;
	return ([...Array(nulls)].map(e=>"0").join("") + (parseInt(hex, 16)).toString(2)).substr(-nulls);
}


const num2hex = num =>
	num.toString(16);
