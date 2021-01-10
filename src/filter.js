const filter = (input, applyFunction) =>{
	var functionAppliedInput = [];
	for ( let i = 0; i < input.length; i++){
	  var status = applyFunction(input[i]);
		if (status){
		  functionAppliedInput.push(input[i]);
		}
	}
	return functionAppliedInput;
}
module.exports = filter;