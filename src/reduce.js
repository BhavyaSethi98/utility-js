const reduce = (input, reducer, additionalValue) =>{
	let result;
	if (additionalValue == undefined) {
		result=undefined
	}
	else{ result = additionalValue }

	for ( let i = 0; i < input.length; i++){
		result = reducer(result, input[i], i, input.values());
		console.log(result);
	}
	return result;
}
module.exports = reduce;