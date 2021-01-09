const map = (input,mapFunction) => {
 if (mapFunction == "cube"){
    for(i=0;i<input.length;i++){
       input[i]=input[i] * input[i] * input[i];
    }
    return input;
 }
 else if (mapFunction == "identity"){
    return input;
 }
 else if (mapFunction == "returnObject"){
    return input+1;
 }
}
module.exports = map;
