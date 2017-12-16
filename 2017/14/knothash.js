const hex2bin = hex =>
	("0000" + (parseInt(hex, 16)).toString(2)).substr(-4);



const knotHash = (str) =>{

	const specialValuesForB =
	    [17, 31, 73, 47, 23];
	const array = [...new Array(256)].map((e,i)=>i);

	const lengths = str.split("")
	    .map(char=>char.charCodeAt(0))
	    .concat(specialValuesForB);
	
	const recursivelySolveList = (array,lengthList,step,skipSize,currPos) => {
	    step = step || 0;
	    skipSize = skipSize || 0;
	    currPos = currPos || 0;
	    
	    array = [...array];
	    if(step >= lengthList.length) 
	        return {
	            "array":array,
	            "skipSize":skipSize,
	            "currPos":currPos,
	        };
	    if(currPos >= array.length)
	        currPos = currPos % array.length;
	    
	    const currLength = lengthList[step];
	    if(currLength === 1 || currLength === 0){

	    }
	    else if(array.length - currPos - currLength >= 0){

	        array.splice(
	            currPos,
	            0,
	            ...array.slice(currPos,currLength+currPos).reverse());

	        array.splice(
	            currPos+currLength,
	            currLength);

	    }
	    else{
	        const cutOutSlice =
	            array
	                .slice(currPos)
	                .concat(
	                    array.slice(0,currLength - (array.length-currPos)));
	        
	        const startSliceLength = 
	            currLength - (array.length-currPos);

	        const endSliceLength =
	            array.length-currPos;
	        
	        const newStartSlice = 
	            [...cutOutSlice] //NOTE that reverse() mutates!
	                .reverse()
	                .slice(0,currLength - (array.length-currPos))
	        
	        const newEndSlice =
	            [...cutOutSlice] //NOTE thatreverse() mutates!
	                .reverse()
	                .slice(-endSliceLength)

	        cutOutSlice.reverse()
	            .forEach((snum,i)=>
	                array[currPos+i] !== undefined ? (array[currPos+i] = snum):
	                                            (array[currPos+i-array.length] = snum)) 

	    }

	    return recursivelySolveList(
	            array,
	            lengthList,
	            step+1,
	            skipSize+1,
	            parseInt(currPos)+parseInt(currLength)+parseInt(skipSize));

	}
	const recursivelySolveB = (input,LENGTHSForB,skippedSize,currPosition,runTimes) =>{
	    skippedSize = skippedSize || 0;
	    currPosition = currPosition || 0;
	    runTimes = runTimes || 0;
	    if(runTimes >= 64)
	        return input;
	    const {array,skipSize,currPos} = 
	        recursivelySolveList(
	            input,
	            LENGTHSForB,
	            0,
	            skippedSize,
	            currPosition);

	    return recursivelySolveB(array,LENGTHSForB,skipSize,currPos,runTimes+1);
	}
	const resultB = 
	    recursivelySolveB(array,lengths,0,0,0)
	const splitInto16Parts = 
	    resultB
	        .reduce((acc,next,i)=>
	            acc[acc.length-1].length % 16 === 0 ? acc.concat([[next]]) : 
	                                                  (acc[acc.length-1].push(next),acc)  
	            ,[[]])
	        .slice(1);


	return splitInto16Parts
	    .map(lineOfNums=>lineOfNums.reduce((a,b)=>a^b,0))
	    .map(num=>num.toString(16))
	    .map(term=>term.length > 1 ? term : "0"+term.toString())
	    //doesn't work without this? why?
	    .join("")
	    .split("")
	    .map(n=>hex2bin(n))
	    .join("")

}