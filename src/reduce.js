const reduce = (input, reducer, additionalValue) =>{
	let result;
	if (additionalValue == undefined) {
	   if(typeof(input)=="string")
	     result="";
	   else if (typeof(input)=="number")
	     result=0;
	   else
		 result=undefined
	}
	else{ result = additionalValue }

	for ( let i = 0; i < input.length; i++){
		result = reducer(result, input[i], i, input.values());
	}
	return result;
}
module.exports = reduce;