Array.prototype.myFilter = function(cb, context = this) {
  const filtered = [];

  for (let i = 0; i < context.length; i += 1) {
    if (cb(context[i], i, context))
      filtered.push(context[i])
  }

  return filtered;
}