function task1 () {
	const inputOne = prompt("Input a valid number:");
  const inputTwo = prompt("Input another valid number:");
  
  if (isNaN(inputOne) || isNaN(inputTwo)) {
  	return console.log("Некорректный ввод!");
  }
  	
  return console.log(Number(inputOne).toString(inputTwo));
};