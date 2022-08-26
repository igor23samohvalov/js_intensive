function isOnlyNumbersInside(array) {
	return array.every((n) => typeof n === "number" && !isNaN(n));
};
function isValidNumber(num) {
	return typeof num === "number" && !isNaN(num);
};
function customSlice(array, start, end) {
	const result = [];
  
  for (let i = start; i <= end; i += 1) {
  	if (array[i])
    	result.push(array[i]);
  }
  
  return result;
};

function selectFromInterval(numArray, start, end) {
	if (!Array.isArray(numArray) || !isOnlyNumbersInside(numArray))
  	throw new Error("First argument is invalid");
  if (!isValidNumber(start) || !isValidNumber(end))
  	throw new Error("Either the second of third arguments is invalid or maybe both");  
  if (end < start)
  	[end, start] = [start, end];
  
  return customSlice(numArray, start - 1, end - 1);
};