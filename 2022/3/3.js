var splitInCompartments = str=> str.split("").reduce((acc,curr,i,arr)=>(i<arr.length/2 ? {...acc,comp1:acc.comp1.concat(curr)}:{comp1:acc.comp1,comp2:acc.comp2.concat(curr)}),{comp1:[],comp2:[]});
/*A:*/input.split("\n").map(line=>{var compartments =splitInCompartments(line);return compartments.comp1.filter(char=>compartments.comp2.includes(char))[0]}).map(char=>char===char.toLowerCase() ? char.charCodeAt()-96:char.charCodeAt()-38).reduce((a,b)=>a+b)


/*B:*/ input.split("\n").reduce((acc,curr,i)=>i % 3 == 0 ? acc.concat([[curr]]):(acc[acc.length-1].push(curr),acc),[]).map(lines=>lines.map(line=>line.split(""))).map(charArrs=>charArrs.map(e=>e).reduce((acc,next,i)=>next.filter(char=>acc.includes(char)),charArrs[0]).slice(0,1)[0]).map(char=>char===char.toLowerCase() ? char.charCodeAt()-96:char.charCodeAt()-38).reduce((a,b)=>a+b)
