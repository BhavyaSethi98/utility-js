const map = (input,mapFunction) => {
    var functionAppliedOnInput = [];
	for ( let i = 0; i < input.length; i++){
	  var functionAppliedOnEachElement = mapFunction(input[i]);
	  functionAppliedOnInput.push(functionAppliedOnEachElement);
	}
	return functionAppliedOnInput;
}
module.exports = map;
