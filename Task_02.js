function task2() {
	const inputOne = prompt("Input a valid number:");
  const inputTwo = prompt("Input another valid number:");
  
  if (!isNaN(inputOne) && !isNaN(inputTwo)) {
    const sum = Number(inputOne) + Number(inputTwo);
    const division = Number(inputOne) / Number(inputTwo);

    return console.log(`Ответ: ${sum}, ${division}`);
  }

  return console.log("Некорректный ввод!");
};