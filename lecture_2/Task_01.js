function isOnlyNumbersInside(array) {
	return array.every((n) => typeof n === "number" && !isNaN(n));
};
function isValidNumber(num) {
	return typeof num === "number" && !isNaN(num);
};
function isInIntervals(value, lowest, highest) {
	return (value >= lowest && value <= highest);
};

function selectFromInterval(numArray, start, end) {
	if (!Array.isArray(numArray) || !isOnlyNumbersInside(numArray))
  	throw new Error("First argument is invalid");
  if (!isValidNumber(start) || !isValidNumber(end))
  	throw new Error("Either the second of third arguments is invalid or maybe both");  
  if (end < start)
  	[end, start] = [start, end];
  
  return numArray.filter((n) => isInIntervals(n, start, end));
};