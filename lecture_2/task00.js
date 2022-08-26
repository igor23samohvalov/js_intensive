function isNotObject(value) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) {
  	return true;
  }
  return false;
}

function makeObjectDeepCopy(object) {
	return Object.entries(object).reduce((acc, [key, value]) => {
  	if (isNotObject(value))
    	acc[key] = value;
    else
    	acc[key] = makeObjectDeepCopy(value);
      
    return acc;
  }, {});
};